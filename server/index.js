import { WebSocketServer, WebSocket } from "ws";
import { generateId } from "./helper.js";

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
      return ws.send(JSON.stringify({ type: "error", message: "Invalid JSON" }));
    }

    // 1) User joins
    if (data.type === "join") {
      const existingIds = [...clients.values()].map(obj => obj.id);
      const id = generateId(existingIds);
      const username = "anon";
      const user = { id: id, username: username };
      clients.set(ws, user);

      // Send history to the newcomer only
      ws.send(JSON.stringify({ type: "history", messages: messages }));

      // Tell everyone else someone joined
      broadcast(
        { type: "user_joined", user, users: [...clients.values()] },
        ws
      );

      // Send the full user list to the newcomer
      ws.send(JSON.stringify({ type: "users", users: [...clients.values()], thisUser: user }));
    }

    // 2) Chat message
    if (data.type === "message") {
      const user = clients.get(ws);
      if (!user) return;

      const now = new Date();
      const msg = {
        id: nextMessageId++,
        sender: user.username,
        senderId: user.id,
        message: data.text,
        timestamp: now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        date: now.toLocaleDateString([], { day: "2-digit", month: "short", year: "2-digit" }),
      };

      messages.push(msg);
      broadcast({ type: "message", message: msg });
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
  const json = JSON.stringify(payload);
  for (const client of wss.clients) {
    if (client !== exclude && client.readyState === WebSocket.OPEN) {
      client.send(json);
    }
  }
}

console.log(`WebSocket server running on ws://localhost:${PORT}`);