import { WebSocketServer, WebSocket } from "ws";
import { createUser, createMessage } from "./helper.js";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false } }
);

const PORT = 8080;
const wss = new WebSocketServer({ port: PORT });

const clients = new Map(); /* ws -> { id, username } */
const messages = []; /* [{ id, sender, content, timestamp, date }] */
const defaultUsernames = ["pickle", "olive", "pear", "fern", "seaweed", "mint", "lime", "sage", "jade"];
let nextMessageId = 1;


const { data: rows, error: loadError } = await supabase
  .from("messages")
  .select("*")
  .order("created_at", { ascending: true })
  .limit(10);

if (loadError) {
  console.error("Failed to load history:", loadError);
} else {
  messages.push(...rows.map(createMessage));
  console.log(`Loaded ${messages.length} messages from database`);
}

wss.on("connection", (ws) => {
  console.log("New connection");

  ws.on("message", async (raw) => {
    let data;
    try {
      data = JSON.parse(raw);
    } catch {
      return send(ws, { type: "error", message: "Invalid JSON" });
    }

    /* 1) User joins */
    if (data.type === "join") {
      const existingUser = data.user;
      let user;
      if (existingUser) {
        user = JSON.parse(existingUser);
        clients.set(ws, user);
      } else {
        const existingIds = getUserList().map(obj => obj.id);
        user = createUser(existingIds, defaultUsernames);
        clients.set(ws, user);
      }

      const userList = getUserList();

      send(ws, { type: "history", messages: messages });
      send(ws, { type: "users", users: userList, thisUser: user });
      broadcast({ type: "user_joined", user: user, users: userList }, ws);
    }

    /* 2) Chat message */
    if (data.type === "message") {
      const user = clients.get(ws);
      if (!user) return;

      const { data: row, error } = await supabase
          .from("messages")
          .insert([{
            sender_id: user.id,
            sender: user.username,
            content: data.text,
          }])
          .select()
          .single();
      if (error) {
        console.log("Error inserting message:", error);
        return;
      }

      const msg = createMessage(row);
      messages.push(msg);
      broadcast({ type: "message", message: msg });
    }

    /* 3) Username change */
    if (data.type === "username_change") {
      const user = clients.get(ws);
      if (!user) return;

      const newUsername = data.newUsername;
      if (newUsername.length > 10 || !newUsername) return;
      user.username = newUsername;

      const userList = getUserList();

      send(ws, { type: "users", users: userList, thisUser: user });
      broadcast({ type: "users", users: userList }, ws);
    }
  });

  ws.on("close", () => {
    const user = clients.get(ws);
    clients.delete(ws);
    if (user) {
      broadcast({ type: "user_left", user, users: getUserList() });
    }
  });
});

function broadcast(payload, exclude = null) {
  /* send to everyone (allow exclusion) */
  const json = JSON.stringify(payload);
  for (const client of wss.clients) {
    if (client !== exclude && client.readyState === WebSocket.OPEN) {
      client.send(json);
    }
  }
}

function send(ws, payload) {
  /* send to thisUser */
  ws.send(JSON.stringify(payload));
}

function getUserList() {
  const seen = new Set();
  return [...clients.values()].filter((user) => {
    if (seen.has(user.id)) return false;
    seen.add(user.id);
    return true;
  });
}

console.log(`WebSocket server running on ws://localhost:${PORT}`);