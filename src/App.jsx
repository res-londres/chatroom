import { useState } from "react";
import Composer from "./components/Composer";
import MessageArea from "./components/MessageArea";
import Sidebar from "./components/Sidebar";

function App() {
  const thisUser = { id: "#AAA004", username: "res"};
  const [users] = useState([
    { id: "#AAA000", username: "letty" },
    { id: "#AAA001", username: "alfie" },
    { id: "#AAA002", username: "darling" },
    { id: "#AAA003", username: "honey" },
  ]);

  const [messages] = useState([
    {
      id: 1,
      sender: "attribution",
      timestamp: "10:41 PM",
      date: "25 Oct 26",
      message: "Lorem ipsum dolor sit amet",
    },
    {
      id: 2,
      sender: "res",
      timestamp: "10:42 PM",
      date: "25 Oct 26",
      message: "What the helly",
    },
  ]);

  return (
    <div className="flex h-screen flex-col bg-[#F5FEF9] font-sans text-[#0D160E]">
      <header className="flex items-center justify-start gap-4 bg-[#32BF84] p-4 text-2xl font-semibold tracking-widest text-[#F5FEF9]">
        <span className="icon-[ph--list-bold] text-4xl md:hidden"></span>
        <h1>Chatroom</h1>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <Sidebar thisUser={thisUser} otherUsers={users}/>
        <main className="flex flex-1 flex-col">
          <MessageArea messages={messages} />
          <Composer />
        </main>
      </div>
    </div>
  );
}

export default App;