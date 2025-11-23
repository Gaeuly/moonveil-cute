import Graphic from "../components/navbar/Graphic";
import ThemeToggle from "../components/ThemeToggle";

const Navbar = () => {
  return (
    // Tambah z-[999] biar mutlak paling atas
    <header className="fixed top-0 left-0 w-full z-[999] pointer-events-none">
      <div className="flex justify-between w-full">
        {/* === LEFT SIDE (LOGO) === */}
        <div className="relative bg-white text-white pointer-events-auto rounded-br-[20px] pt-4 pb-3 pl-6 pr-5">
          <div className="flex items-center gap-4">
            <a href="#hero" className="block">
              <img 
                src="/logo.webp" 
                alt="Logo" 
                className="h-8 w-auto object-contain min-w-[32px]"
                onError={(e) => e.currentTarget.style.display = 'none'} 
              />
            </a>
            <div className="h-6 w-[1px] bg-gray-200"></div>
            <ThemeToggle />
          </div>

          {/* Curve Kanan Atas */}
          <Graphic className="absolute -right-[20px] top-0 text-white" />

          {/* Curve Kiri Bawah */}
          <Graphic className="absolute left-0 -bottom-[20px] text-white" />
        </div>

        {/* === RIGHT SIDE (MENU) === */}
        <div className="relative bg-white text-black pointer-events-auto rounded-bl-[20px] pt-4 pb-3 pl-5 pr-6 cursor-pointer hover:bg-gray-50 transition-colors group">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium tracking-wide">Menu</span>
          </div>

          {/* Curve Kiri Atas */}
          <div className="absolute -left-[20px] top-0 text-white">
            <div className="scale-x-[-1]">
              <Graphic />
            </div>
          </div>

          {/* Curve Kanan Bawah */}
          <div className="absolute right-0 -bottom-[20px] text-white">
            <div className="scale-x-[-1]">
              <Graphic />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;