import { useRef, useEffect, useMemo } from "react";
import Message from "../Message";
import EmptyView from "./EmptyView";
import ErrorView from "./ErrorView";
import LoadingView from "./LoadingView";

const BOTTOM_THRESHOLD = 8;
const TEN_MINUTES_MS = 10 * 60 * 1000;

function toMilliseconds(message) {
  if (message.createdAt) {
    const milliseconds = Date.parse(message.createdAt);
    if (!Number.isNaN(milliseconds)) return milliseconds;
  }
  return null;
}

function computeShowMetadata(messages) {
  const flags = [];
  let lastShownTime = null;

  messages.forEach((message, index) => {
    const previous = messages[index - 1];
    const sameSender = Boolean(previous) && previous.senderId === message.senderId;

    const time = toMilliseconds(message);
    const withinTenMinutes =
      lastShownTime !== null &&
      time !== null &&
      Math.abs(time - lastShownTime) < TEN_MINUTES_MS;

    const showMetadata = !(sameSender && withinTenMinutes);
    flags.push(showMetadata);

    if (showMetadata) lastShownTime = time;
  });

  return flags;
}

function MessageArea({ messages, messageAreaState }) {
  const containerRef = useRef(null);
  const isAtBottomRef = useRef(true);

  const showMetadataFlags = useMemo(
    () => computeShowMetadata(messages),
    [messages]
  );

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
      {messages.map((message, index) => (
        <Message
          key={message.id}
          sender={message.sender}
          senderId={message.senderId}
          timestamp={message.timestamp}
          date={message.date}
          content={message.content}
          showMetadata={showMetadataFlags[index]}
        />
      ))}
    </div>
  );
}

export default MessageArea;