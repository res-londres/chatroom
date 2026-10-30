import { useRef } from "react";

function Composer({ onSend }) {
  const textareaRef = useRef(null);

  const handleInput = (event) => {
    const textarea = event.target;
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      const value = event.target.value.trim();
      sendMessage(value);
    }
  };

  const sendMessage = (msg) => {
    if (msg.trim()) {
      onSend(msg);
      textareaRef.current.value = "";
      textareaRef.current.style.height = "auto";
    }
  }

  return (
    <div className="flex items-center gap-4 bg-[#32BF84] p-4">
      <textarea
        ref={textareaRef}
        rows={1}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        placeholder="Type a message…"
        className="max-h-40 w-full resize-none overflow-y-auto rounded-lg bg-[#F5FEF9] px-4 py-2 focus:ring-2 focus:ring-[#269466] focus:outline-none"
        maxLength={1000}
      />
      <button onClick={() => sendMessage(textareaRef.current.value)}>
        <span className="icon-[ph--paper-plane-tilt-fill] text-3xl text-[#1E392A]"></span>
      </button>
    </div>
  );
}

export default Composer;
