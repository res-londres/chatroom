import { useRef, useEffect } from "react";
import Message from "../Message";
import EmptyView from "./EmptyView";
import ErrorView from "./ErrorView";
import LoadingView from "./LoadingView";

const BOTTOM_THRESHOLD = 8;

function MessageArea({ messages, messageAreaState }) {
  const containerRef = useRef(null);
  const isAtBottomRef = useRef(true);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;
    isAtBottomRef.current =
      container.scrollHeight - container.scrollTop - container.clientHeight <= BOTTOM_THRESHOLD;
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (!isAtBottomRef.current) return;
    container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
  }, [messages, messageAreaState]);

  if (messageAreaState === "loading") return <LoadingView />;
  if (messageAreaState === "error") return <ErrorView />;
  if (messages.length === 0) return <EmptyView />;

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      className="flex flex-1 flex-col gap-2 overflow-y-auto p-2 md:p-4"
    >
      {messages.map((message) => (
        <Message
          key={message.id}
          sender={message.sender}
          senderId={message.senderId}
          timestamp={message.timestamp}
          date={message.date}
          content={message.content}
        />
      ))}
    </div>
  );
}

export default MessageArea;