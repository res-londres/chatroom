import Composer from "./components/Composer";

function App() {
  return (
    <div className="flex h-screen flex-col bg-[#F5FEF9] font-sans text-[#0D160E]">
      <header className="flex items-center justify-start gap-4 bg-[#32BF84] p-4 text-2xl font-semibold tracking-widest text-[#F5FEF9]">
        <span className="icon-[ph--list-bold] text-4xl md:hidden"></span>
        <h1>Chatroom</h1>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <aside className="fixed inset-y-0 left-0 w-64 -translate-x-full transform transition-transform">
          active people
        </aside>
        <main className="flex flex-1 flex-col">
          <div className="flex flex-col gap-2 flex-1 overflow-y-auto p-2">
            <div className="flex flex-col">
              <div className="flex justify-between px-2 text-[#65676B]">
                <span>attribution</span> 
                <span>10:41 PM | 25 Oct 26</span>
              </div>
              <div className="bg-[#BEF8DF] p-3 rounded-lg text-justify w-fit">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis aperiam esse voluptatem ex suscipit delectus ea sed aut, nostrum voluptas odio voluptates dolorum consequatur praesentium, laudantium fugiat commodi nulla optio excepturi quis illum ipsa omnis accusamus laborum? Maiores obcaecati perspiciatis velit tenetur autem, inventore ea eum, ab dignissimos harum eos unde quod odio, sunt laborum. Odio quisquam explicabo vero praesentium mollitia ad hic sunt dolore nemo, repudiandae, enim quam veniam amet error voluptates porro omnis perspiciatis? Modi libero necessitatibus tempore incidunt, alias saepe hic placeat et quos est nemo sed corporis adipisci numquam eius in facere eveniet! Et, nobis optio.</div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between px-2 text-[#65676B]">
                <span>res</span> 
                <span>10:41 PM | 25 Oct 26</span>
              </div>
              <div className="bg-[#BEF8DF] p-3 rounded-lg text-justify w-fit">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur iure quidem perferendis maiores necessitatibus fugiat qui, porro quibusdam culpa, nostrum, laborum recusandae assumenda aliquid fuga! Totam eos, iste dignissimos, rerum molestias perspiciatis dicta quis nulla aut fugit temporibus! Ea temporibus soluta quaerat aliquid voluptatem ullam dignissimos officiis? Non, atque necessitatibus?</div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between px-2 text-[#65676B]">
                <span>foo</span> 
                <span>10:41 PM | 25 Oct 26</span>
              </div>
              <div className="bg-[#BEF8DF] p-3 rounded-lg text-justify w-fit">Lorem ipsum</div>
            </div>
            <div className="flex flex-col">
              <div className="hidden justify-between px-2 text-[#65676B]">
                <span>res</span> 
                <span>10:41 PM | 25 Oct 26</span>
              </div>
              <div className="bg-[#BEF8DF] p-3 rounded-lg text-justify w-fit">dolor sit amet</div>
            </div>
            <div className="flex flex-col">
              <div className="hidden justify-between px-2 text-[#65676B]">
                <span>res</span> 
                <span>10:41 PM | 25 Oct 26</span>
              </div>
              <div className="bg-[#BEF8DF] p-3 rounded-lg text-justify w-fit">piw pitipiwpiw wiwiw</div>
            </div>
          </div>
          <Composer />
        </main>
      </div>
    </div>
  );
}

export default App;
