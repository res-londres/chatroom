import ActiveUser from "./ActiveUser";

function Sidebar({ thisUser, otherUsers }) {
  return (
    <aside className="fixed inset-y-0 left-0 flex w-64 -translate-x-full transform flex-col border-r-8 border-[#F5FEF9] bg-[#F5FEF9] transition-transform md:static md:translate-x-0 md:border-r md:border-[#d4d7dd]">
      <header className="md:hidden flex items-center justify-between bg-[#32BF84] p-4 text-2xl font-semibold tracking-widest text-[#F5FEF9]">
        <span>Online</span>
        <span className="icon-[ph--caret-right-bold]"></span>
      </header>
      <div className="flex min-h-0 flex-1 flex-col px-2">
        <div className="flex items-center justify-between border-b border-[#d4d7dd] py-4">
          <ActiveUser key={thisUser.id} username={thisUser.username} id={thisUser.id} />
          <span className="icon-[ph--note-pencil-bold]"></span>
        </div>
        <div className="flex min-h-0 flex-col overflow-y-auto py-4 gap-2">
          {otherUsers.map((user) => (
            <ActiveUser key={user.id} username={user.username} id={user.id} />
          ))}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;