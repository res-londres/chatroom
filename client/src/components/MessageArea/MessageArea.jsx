import { useRef, useEffect } from "react";
import Message from "../Message";
import EmptyView from "./EmptyView";
import ErrorView from "./ErrorView";
import LoadingView from "./LoadingView";


function MessageArea({ messages, thisUser, messageAreaState }) {
  const bottomRef = useRef(null);

  /* TODO: change this so that it should scroll when any user sends a message, not just this user, but only if this user is already at the bottom of the message area */
  useEffect(() => {
    if (!thisUser) return;

    const last = messages[messages.length - 1];
    if (!last) return;

    if (last.senderId === thisUser.id) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, thisUser]);

  if (messageAreaState === "loading") return <LoadingView />;
  if (messageAreaState === "error") return <ErrorView />;
  if (messages.length === 0) return <EmptyView />;

  return (
    <div className="flex flex-1 flex-col gap-2 overflow-y-auto p-2 md:p-4">
      {messages.map((message) => (
          <Message
            key={message.id}
            sender={message.sender}
            senderId={message.senderId}
            timestamp={message.timestamp}
            date={message.date}
            content={message.content}
          />
        ))
      }
      <div ref={bottomRef}></div>
    </div>
  );
}

export default MessageArea;
