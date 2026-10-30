import ActiveUser from "./ActiveUser";

function Sidebar({ thisUser, otherUsers, isOpen, onClose }) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 flex w-64 transform flex-col border-r border-[#D4D7DD] bg-[#F5FEF9] transition-transform md:static md:translate-x-0 md:border-r ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <header className="flex justify-between gap-4 bg-[#32BF84] p-4 font-semibold tracking-widest text-[#F5FEF9] md:hidden">
        <h1 className="text-2xl mb-1">Online</h1>
        <button onClick={onClose}>
          <span className="text-2xl icon-[ph--caret-right-bold]"></span>
        </button>
      </header>
      <div className="flex min-h-0 flex-1 flex-col px-2">
        <div className="flex items-center justify-between border-b border-[#D4D7DD] py-4">
          <ActiveUser username={thisUser.username} id={thisUser.id} />
          <span className="icon-[ph--note-pencil-bold] text-[#65676B]"></span>
        </div>
        <div className="flex min-h-0 flex-col gap-2 overflow-y-auto py-4">
          {otherUsers.map((user) => (
            <ActiveUser key={user.id} username={user.username} id={user.id} />
          ))}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
