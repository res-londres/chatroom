function App() {
  return (
    <div className="flex h-screen flex-col font-sans bg-[#F5FEF9] text-[#0D160E]">
      <header className="flex justify-start gap-4 items-center p-4 text-2xl tracking-widest font-semibold text-[#F5FEF9] bg-[#32BF84]">
        <span className="md:hidden text-3xl icon-[ph--sidebar-simple]"></span>
        <h1>Chatroom</h1>
      </header>
      <div>
        <aside>
          active people
        </aside>
        <main>
          <div>
            chatbox
          </div>
          <div>
            composer
          </div>
        </main>
      </div>
    </div>
  )
}

export default App