function App() {
  return (
    <div className="flex h-screen flex-col bg-[#F5FEF9] font-sans text-[#0D160E]">
      <header className="flex items-center justify-start gap-4 bg-[#32BF84] p-4 text-2xl font-semibold tracking-widest text-[#F5FEF9]">
        <span className="icon-[ph--sidebar-simple] text-3xl md:hidden"></span>
        <h1>Chatroom</h1>
      </header>
      <div>
        <aside>active people</aside>
        <main>
          <div>chatbox</div>
          <div>composer</div>
        </main>
      </div>
    </div>
  );
}

export default App;
