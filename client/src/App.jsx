import { useState } from "react";
import Composer from "./components/Composer";
import MessageArea from "./components/MessageArea";
import Sidebar from "./components/Sidebar";
import { useChatSocket } from "./hooks/useChatSocket";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { messages, users, thisUser, sendMessage, changeUsername } = useChatSocket("ws://localhost:8080");

  const otherUsers = thisUser
  ? users.filter((u) => u.id !== thisUser.id)
  : users;

  return (
    <div className="flex h-screen flex-col bg-[#F5FEF9] font-sans text-[#0D160E]">
      <header className="flex justify-start gap-4 bg-[#32BF84] p-4 font-semibold tracking-widest text-[#F5FEF9]">
        <button className="md:hidden" onClick={() => setIsSidebarOpen(true)}>
          <span className="icon-[ph--list-bold] text-3xl"></span>
        </button>
        <h1 className="text-2xl">Chatroom</h1>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          thisUser={thisUser}
          otherUsers={otherUsers}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          changeUsername={changeUsername}
        />
        <main className="flex flex-1 flex-col">
          <MessageArea messages={messages} thisUser={thisUser} />
          <Composer onSend={sendMessage} />
        </main>
      </div>
    </div>
  );
}

export default App;
