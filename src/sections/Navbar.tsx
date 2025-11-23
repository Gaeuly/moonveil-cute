import Graphic from "../components/navbar/Graphic";
import ThemeToggle from "../components/ThemeToggle";

const Navbar = () => {
  return (
    // FIX UTAMA: Ganti 'top-0' jadi 'top-2' atau 'top-4'.
    // Ini ngasih 'napas' di atas biar lengkungannya gak nabrak search bar browser.
    // 'w-[calc(100%-16px)]' dan 'left-2' biar ngambang tengah (opsional, tapi lebih estetik).
    <header className="fixed top-2 left-0 right-0 mx-auto w-full z-[999] pointer-events-none px-2">
      
      {/* Container Utama dengan Shadow di Parent */}
      <div className="flex justify-between w-full drop-shadow-sm filter">
        
        {/* === KIRI (LOGO) === */}
        <div className="relative bg-white text-white pointer-events-auto rounded-br-[20px] rounded-tl-[15px] pt-4 pb-3 pl-6 pr-5 overflow-visible">
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

          {/* Curve Kanan Atas (Nyambung ke sisi kanan logo) */}
          {/* Posisi: Nempel di kanan, sejajar atas. Pake default Graphic (Solid Kiri-Atas) */}
          <Graphic className="absolute -right-[19.5px] top-0 text-white" />

          {/* Curve Kiri Bawah (Nyambung ke sisi bawah logo) */}
          {/* Posisi: Nempel di kiri bawah. BUTUH ROTATE 90 Biar solid-nya di Kanan-Atas */}
          <Graphic className="absolute left-0 -bottom-[19.5px] text-white rotate-90" />
        </div>

        {/* === KANAN (MENU) === */}
        <div className="relative bg-white text-black pointer-events-auto rounded-bl-[20px] rounded-tr-[15px] pt-4 pb-3 pl-5 pr-6 cursor-pointer hover:bg-gray-50 transition-colors group overflow-visible">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium tracking-wide">Menu</span>
          </div>

          {/* Curve Kiri Atas (Nyambung ke sisi kiri menu) */}
          {/* Posisi: Nempel di kiri, sejajar atas. BUTUH ROTATE 90 (Solid Kanan-Atas) */}
          <Graphic className="absolute -left-[19.5px] top-0 text-white rotate-90" />

          {/* Curve Kanan Bawah (Nyambung ke sisi bawah menu) */}
          {/* Posisi: Nempel kanan bawah. Pake default Graphic (Solid Kiri-Atas) */}
          <Graphic className="absolute right-0 -bottom-[19.5px] text-white" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;


