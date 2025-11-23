import Graphic from "../components/navbar/Graphic";
import ThemeToggle from "../components/ThemeToggle";
import { Menu } from "lucide-react"; 

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      <div className="flex justify-between w-full">
        
        {/* === LEFT ISLAND (LOGO + TOGGLE) === */}
        <div className="relative bg-white text-white pointer-events-auto rounded-br-[20px] pt-4 pb-3 pl-6 pr-5 shadow-sm">
          <div className="flex items-center gap-4">
            
            {/* Logo */}
            <a href="#hero" className="block">
              <img src="/logo.webp" alt="Logo" className="h-8 w-auto object-contain" />
            </a>

            {/* Separator Tipis */}
            <div className="h-6 w-[1px] bg-gray-200"></div>

            {/* Toggle */}
            <ThemeToggle />
          </div>

          {/* Logic Curve Kiri:
              1. Kanan-Atas (Nyambung ke garis atas layar)
              2. Bawah-Kiri (Nyambung ke garis kiri layar) 
          */}
          
          {/* Curve di Sisi Kanan (Nempel Atas) */}
          <div className="absolute -right-[18px] top-0 text-white">
            <Graphic />
          </div>

          {/* Curve di Sisi Bawah (Nempel Kiri) */}
          <div className="absolute left-0 -bottom-[18px] text-white">
             {/* Rotate 90 derajat kalo path aslinya vertikal */}
             <div className="rotate-0"> {/* Cek visual, mungkin butuh rotasi beda tergantung path */}
                <Graphic />
             </div>
          </div>
        </div>


        {/* === RIGHT ISLAND (MENU) === */}
        <div className="relative bg-white text-black pointer-events-auto rounded-bl-[20px] pt-4 pb-3 pl-5 pr-6 shadow-sm cursor-pointer hover:bg-gray-50 transition-colors group">
          
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium tracking-wide">Menu</span>
            {/* Kalo mau simple text doang, hapus line bawah ini */}
            {/* <Menu size={18} /> */} 
          </div>

          {/* Logic Curve Kanan:
              Kebalikan dari yang kiri
          */}

          {/* Curve di Sisi Kiri (Nempel Atas) */}
          <div className="absolute -left-[18px] top-0 text-white">
            <div className="scale-x-[-1]"> {/* Flip Horizontal */}
               <Graphic />
            </div>
          </div>

          {/* Curve di Sisi Bawah (Nempel Kanan) */}
          <div className="absolute right-0 -bottom-[18px] text-white">
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