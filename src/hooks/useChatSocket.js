import { useEffect, useRef, useState, useCallback } from "react";

export function useChatSocket(url) {
  const wsRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [thisUser, setThisUser] = useState(null);

  useEffect(() => {
    const ws = new WebSocket(url);
    wsRef.current = ws;

    ws.onopen = () => {
      ws.send(JSON.stringify({ type: "join" }));
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
        setThisUser(data.thisUser);
      }
    };

    return () => ws.close();
  }, [url]);

  const sendMessage = useCallback((text) => {
    const ws = wsRef.current;
    if (ws?.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ type: "message", text: text }));
    }
  }, []);

  const changeUsername = useCallback((newUsername) => {
    const ws = wsRef.current;
    if (ws?.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ type: "username_change", newUsername: newUsername }));
    }
  }, []);

  return { messages, users, thisUser, sendMessage, changeUsername };
}