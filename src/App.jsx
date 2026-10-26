import { useState } from "react";
import Composer from "./components/Composer";
import MessageArea from "./components/MessageArea";
import Sidebar from "./components/Sidebar";

function App() {
  const thisUser = { id: "#RES505", username: "res" };
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [users] = useState([]);
  const [messages] = useState([]);

  return (
    <div className="flex h-screen flex-col bg-[#F5FEF9] font-sans text-[#0D160E]">
      <header className="flex items-center justify-start gap-4 bg-[#32BF84] p-4 text-2xl font-semibold tracking-widest text-[#F5FEF9]">
        <button className="md:hidden" onClick={() => setIsSidebarOpen(true)}>
          <span className="icon-[ph--list-bold] text-4xl"></span>
        </button>
        <h1 className="mb-1">Chatroom</h1>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          thisUser={thisUser}
          otherUsers={users}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <main className="flex flex-1 flex-col">
          <MessageArea messages={messages} />
          <Composer />
        </main>
      </div>
    </div>
  );
}

export default App;
