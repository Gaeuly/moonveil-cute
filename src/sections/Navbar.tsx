import Graphic from "../components/navbar/Graphic";
import ThemeToggle from "../components/ThemeToggle";

const Navbar = () => {
  return (
    // CONTAINER UTAMA (Transparan):
    // fixed top-4: Jarak dari atas biar 'ngambang' (PENTING biar lengkungan gak kepotong).
    // px-4: Jarak kiri-kanan biar gak nempel tembok.
    // pointer-events-none: Biar area bolong di tengah bisa ditembus klik (klik ke section bawahnya).
    <header className="fixed top-4 left-0 w-full z-[999] px-4 pointer-events-none">
      
      {/* Flex container buat misahin Kiri (Logo) dan Kanan (Menu) */}
      <div className="flex justify-between w-full">
        
        {/* === PULAU KIRI (LOGO) === */}
        {/* pointer-events-auto: Wajib ada biar tombol di dalemnya bisa diklik */}
        <div className="relative bg-white text-black pointer-events-auto rounded-[15px] rounded-br-[20px] pt-3 pb-3 pl-5 pr-5 shadow-sm">
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

          {/* Curve Kanan Atas (Menjulur ke Kanan) */}
          <div className="absolute -right-[20px] top-0 text-white">
            <Graphic />
          </div>

          {/* Curve Kiri Bawah (Menjulur ke Bawah) */}
          <div className="absolute left-0 -bottom-[20px] text-white">
             {/* Puter 90 derajat biar pas sudutan bawah */}
             <div className="rotate-90">
                <Graphic />
             </div>
          </div>
        </div>


        {/* === PULAU KANAN (MENU) === */}
        <div className="relative bg-white text-black pointer-events-auto rounded-[15px] rounded-bl-[20px] pt-3 pb-3 pl-5 pr-5 shadow-sm cursor-pointer hover:bg-gray-50 transition-colors group">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium tracking-wide">Menu</span>
          </div>

          {/* Curve Kiri Atas (Menjulur ke Kiri) */}
          <div className="absolute -left-[20px] top-0 text-white">
            {/* Flip Horizontal */}
            <div className="scale-x-[-1]">
              <Graphic />
            </div>
          </div>

          {/* Curve Kanan Bawah (Menjulur ke Bawah) */}
          <div className="absolute right-0 -bottom-[20px] text-white">
            {/* Flip Horizontal + Puter 90 */}
            <div className="scale-x-[-1] rotate-90">
              <Graphic />
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Navbar;