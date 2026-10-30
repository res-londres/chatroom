import { WebSocketServer, WebSocket } from "ws";
import { createUser, createMessage } from "./helper.js";

const PORT = 8080;
const wss = new WebSocketServer({ port: PORT });

const clients = new Map(); // ws -> { id, username }
const messages = []; // [{ id, sender, message, timestamp, date }]
let nextMessageId = 1;

wss.on("connection", (ws) => {
  console.log("New connection");

  ws.on("message", (raw) => {
    let data;
    try {
      data = JSON.parse(raw);
    } catch {
      return send(ws, { type: "error", message: "Invalid JSON" });
    }

    // 1) User joins
    if (data.type === "join") {
      const existingIds = [...clients.values()].map(obj => obj.id);
      const user = createUser(existingIds, ["pickle", "olive", "pear", "fern", "seaweed", "mint", "lime", "sage", "jade"]);
      clients.set(ws, user);

      const userList = [...clients.values()];

      send(ws, { type: "history", messages: messages });
      send(ws, { type: "users", users: userList, thisUser: user });
      broadcast({ type: "user_joined", user: user, users: userList }, ws);
    }

    // 2) Chat message
    if (data.type === "message") {
      const user = clients.get(ws);
      if (!user) return;

      const msg = createMessage(nextMessageId++, user, data.text);

      messages.push(msg);
      broadcast({ type: "message", message: msg });
    }

    // 3) Username change
    if (data.type === "username_change") {
      const user = clients.get(ws);
      if (!user) return;

      const newUsername = data.newUsername;
      if (newUsername.length > 10 || !newUsername) return;
      user.username = newUsername;

      const userList = [...clients.values()];

      send(ws, { type: "users", users: userList, thisUser: user });
      broadcast({ type: "users", users: userList }, ws);
    }
  });

  ws.on("close", () => {
    const user = clients.get(ws);
    clients.delete(ws);
    if (user) {
      broadcast({ type: "user_left", user, users: [...clients.values()] });
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

console.log(`WebSocket server running on ws://localhost:${PORT}`);