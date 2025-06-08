

export const Navbar = () => {
  
  

  return (
    <nav className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-slate-200 dark:border-slate-700 shadow-sm h-12 flex justify-between items-center px-6 mb-2">
      <div className="flex items-center">
        <img width={30} className="mr-2" src="./public/vslogo.avif" />
        <span className="text-lg font-semibold text-slate-700 dark:text-slate-200 tracking-tight select-none">
          VS Lite
        </span>
        <span className="ml-3 mt-4 text-[10px] text-slate-400 dark:text-slate-500 font-normal tracking-wide select-none">
          Made by Vasu
        </span>
      </div>
      <div className="flex gap-2 items-center">
        
        <a
          href="https://www.linkedin.com/in/vasusingh1305/"
          target="_blank"
        >
          <img className="h-8" src="./public/linkedin.svg" />
        </a>
        <a href="https://github.com/Vasu1303" target="_blank">
          <img className="h-6" src="./public/github.svg" />
        </a>
      </div>
    </nav>
  );
};