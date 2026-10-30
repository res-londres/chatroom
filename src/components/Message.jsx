function Message({ sender, senderId, timestamp, date, message }) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between px-2 text-[#65676B]">
        <div>
          <span>{sender}</span>
          <span className="ml-2 text-[75%]">{senderId}</span>
        </div>
        <span>
          {timestamp} | {date}
        </span>
      </div>
      <div className="w-fit rounded-lg bg-[#BEF8DF] p-3 text-justify md:max-w-[85%]">
        <span>{message}</span>
      </div>
    </div>
  );
}

export default Message;
