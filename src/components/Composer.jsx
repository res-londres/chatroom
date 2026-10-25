import { useRef } from 'react'

function Composer() {
  const textareaRef = useRef(null);

  const handleInput = (event) => {
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  };

  return (
    <div className="flex items-center gap-4 bg-[#32BF84] p-4">
      <textarea
        ref={textareaRef}
        rows={1}
        onInput={handleInput}
        placeholder="Type a message…"
        className="w-full resize-none rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#269466] max-h-40 overflow-y-auto bg-[#F5FEF9]"
      />
      <span className="text-4xl icon-[ph--paper-plane-tilt-fill] text-[#1E392A]"></span>
    </div>
  );
}

export default Composer;