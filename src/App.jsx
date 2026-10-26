import Composer from "./components/Composer";

function App() {
  return (
    <div className="flex h-screen flex-col bg-[#F5FEF9] font-sans text-[#0D160E]">
      <header className="flex items-center justify-start gap-4 bg-[#32BF84] p-4 text-2xl font-semibold tracking-widest text-[#F5FEF9]">
        <span className="icon-[ph--list-bold] text-4xl md:hidden"></span>
        <h1>Chatroom</h1>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <aside className="fixed inset-y-0 left-0 flex w-64 -translate-x-full transform flex-col border-r-8 border-[#F5FEF9] bg-[#F5FEF9] transition-transform md:static md:translate-x-0 md:border-r md:border-[#d4d7dd]">
          <header className="md:hidden flex items-center justify-between bg-[#32BF84] p-4 text-2xl font-semibold tracking-widest text-[#F5FEF9]">
            <span>Online</span>
            <span className="icon-[ph--caret-right-bold]"></span>
          </header>
          <div className="flex min-h-0 flex-1 flex-col px-2">
            <div className="flex items-center justify-between border-b border-[#d4d7dd] py-2">
              <div className="flex items-baseline justify-between">
                <span>res</span>
                <span className="ml-2 text-[80%] text-[#65676B]">#AAA000</span>
              </div>
              <span className="icon-[ph--note-pencil-bold]"></span>
            </div>
            <div className="flex min-h-0 flex-col overflow-y-auto py-4 gap-2">
              <div className="flex items-baseline justify-between">
                <span>letty</span>
                <span className="ml-2 text-[80%] text-[#65676B]">#AAA000</span>
              </div>
              <div className="flex items-baseline justify-between">
                <span>alfie</span>
                <span className="ml-2 text-[80%] text-[#65676B]">#AAA000</span>
              </div>
              <div className="flex items-baseline justify-between">
                <span>darling</span>
                <span className="ml-2 text-[80%] text-[#65676B]">#AAA000</span>
              </div>
              <div className="flex items-baseline justify-between">
                <span>honey</span>
                <span className="ml-2 text-[80%] text-[#65676B]">#AAA000</span>
              </div>
            </div>
          </div>
        </aside>
        <main className="flex flex-1 flex-col">
          <div className="flex flex-1 flex-col gap-2 overflow-y-auto p-2 md:p-4">
            <div className="flex flex-col">
              <div className="flex justify-between px-2 text-[#65676B]">
                <span>attribution</span>
                <span>10:41 PM | 25 Oct 26</span>
              </div>
              <div className="w-fit rounded-lg bg-[#BEF8DF] p-3 text-justify md:max-w-[85%]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
                aperiam esse voluptatem ex suscipit delectus ea sed aut, nostrum
                voluptas odio voluptates dolorum consequatur praesentium,
                laudantium fugiat commodi nulla optio excepturi quis illum ipsa
                omnis accusamus laborum? Maiores obcaecati perspiciatis velit
                tenetur autem, inventore ea eum, ab dignissimos harum eos unde
                quod odio, sunt laborum. Odio quisquam explicabo vero
                praesentium mollitia ad hic sunt dolore nemo, repudiandae, enim
                quam veniam amet error voluptates porro omnis perspiciatis? Modi
                libero necessitatibus tempore incidunt, alias saepe hic placeat
                et quos est nemo sed corporis adipisci numquam eius in facere
                eveniet! Et, nobis optio.
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between px-2 text-[#65676B]">
                <span>res</span>
                <span>10:41 PM | 25 Oct 26</span>
              </div>
              <div className="w-fit md:max-w-[85%] rounded-lg bg-[#BEF8DF] p-3 text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aspernatur iure quidem perferendis maiores necessitatibus fugiat
                qui, porro quibusdam culpa, nostrum, laborum recusandae
                assumenda aliquid fuga! Totam eos, iste dignissimos, rerum
                molestias perspiciatis dicta quis nulla aut fugit temporibus! Ea
                temporibus soluta quaerat aliquid voluptatem ullam dignissimos
                officiis? Non, atque necessitatibus?
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between px-2 text-[#65676B]">
                <span>foo</span>
                <span>10:41 PM | 25 Oct 26</span>
              </div>
              <div className="w-fit md:max-w-[85%] rounded-lg bg-[#BEF8DF] p-3 text-justify">
                Lorem ipsum
              </div>
            </div>
          </div>
          <Composer />
        </main>
      </div>
    </div>
  );
}

export default App;