
export function App() {

  return (
    <div className="w-full h-full bg-zinc-950">
      <form 
        className="w-[400px] h-auto p-8 bg-zinc-900 mx-auto mt-40 flex flex-col gap-8 rounded-md"
      >
        <div className="w-full text-start text-gray-100">
          <h1 className="text-2xl font-bold">Entrar</h1>
        </div>
        <div className="w-full">
          <input
            className="w-full px-3 py-2 rounded-md bg-zinc-800 text-gray-400 outline-none border-none"
            placeholder="username"
          />
        </div>
        <div className="w-full">
          <input
            className="w-full py-2 px-3 rounded-md bg-zinc-800 text-gray-400 outline-none border-none"
            placeholder="Password"
          />
        </div>
        <button
          type="button"
          className="w-full py-2 cursor-pointer rounded-md text-white bg-emerald-400 hover:bg-emerald-500 transition-colors"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
