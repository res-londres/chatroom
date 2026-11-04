import { useEffect, useRef, useState, useCallback } from "react";

export function useChatSocket(url) {
  const wsRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [messageAreaState, setMessageAreaState] = useState("loading");
  const [users, setUsers] = useState([]);
  const [thisUser, setThisUser] = useState(null);

  useEffect(() => {
    const ws = new WebSocket(url);
    wsRef.current = ws;

    ws.onopen = () => {
      const user = localStorage.getItem("user");
      send(ws, { type: "join", user: user });
      send(ws, { type: "load_messages" });
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type === "history") {
        setMessages(data.messages);
      }
      if (data.type === "message") {
        setMessages((prev) => [...prev, data.message]);
      }
      if (data.type === "user_joined" || data.type === "user_left") {
        setUsers(data.users);
      }
      if (data.type === "users") {
        setUsers(data.users);
        if (data.thisUser) {
          setThisUser(data.thisUser);
          localStorage.setItem("user", JSON.stringify(data.thisUser));
        }
      }
      if (data.type === "message_area_state") {
        setMessageAreaState(data.state);
      }
    };

    return () => ws.close();
  }, [url]);

  const sendMessage = useCallback((text) => {
    const ws = wsRef.current;
    if (ws?.readyState === WebSocket.OPEN) {
      send(ws, { type: "message", text: text });
    }
  }, []);

  const changeUsername = useCallback((newUsername) => {
    const ws = wsRef.current;
    if (ws?.readyState === WebSocket.OPEN) {
      send(ws, { type: "username_change", newUsername: newUsername });
    }
  }, []);

  return { messages, users, thisUser, messageAreaState, sendMessage, changeUsername };
}

function send(ws, payload) {
  ws.send(JSON.stringify(payload));
}