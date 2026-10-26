function Message({ sender, timestamp, date, message }) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between px-2 text-[#65676B]">
        <span>{sender}</span>
        <span>{timestamp} | {date}</span>
      </div>
      <div className="w-fit md:max-w-[85%] rounded-lg bg-[#BEF8DF] p-3 text-justify">
        <span>{message}</span>
      </div>
    </div>
  );
}

export default Message;



