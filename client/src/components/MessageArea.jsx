import { useRef, useEffect } from "react";
import Message from "./Message";

function MessageArea({ messages, thisUser }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    if (!thisUser) return;

    const last = messages[messages.length - 1];
    if (!last) return;

    if (last.senderId === thisUser.id) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, thisUser]);

  return (
    <div className="flex flex-1 flex-col gap-2 overflow-y-auto p-2 md:p-4">
      {messages.map((message) => (
        <Message
          key={message.id}
          sender={message.sender}
          senderId={message.senderId}
          timestamp={message.timestamp}
          date={message.date}
          message={message.message}
        />
      ))}
      <div ref={bottomRef}></div>
    </div>
  );
}

export default MessageArea;
