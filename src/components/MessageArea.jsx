import Message from "./Message";

function MessageArea({ messages }) {
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
    </div>
  );
}

export default MessageArea;
