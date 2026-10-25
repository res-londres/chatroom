function App() {
  return (
    <div className="flex h-screen flex-col bg-[#F5FEF9] font-sans text-[#0D160E]">
      <header className="flex items-center justify-start gap-4 bg-[#32BF84] p-4 text-2xl font-semibold tracking-widest text-[#F5FEF9]">
        <span className="icon-[ph--sidebar-simple] text-3xl md:hidden"></span>
        <h1>Chatroom</h1>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <aside className="fixed inset-y-0 left-0 w-64 -translate-x-full transform transition-transform">
          active people
        </aside>
        <main className="flex flex-1 flex-col">
          <div className="flex flex-1 overflow-y-auto">chatbox</div>
          <div className="flex-end bg-[#32BF84] p-4">composer</div>
        </main>
      </div>
    </div>
  );
}

export default App;
