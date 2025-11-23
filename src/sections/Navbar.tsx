import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, ArrowRight, Disc } from 'lucide-react';

const Curve = ({ className, rotation }: { className?: string; rotation?: string }) => {
  return (
    <div className={`absolute w-5 h-5 pointer-events-none z-50 ${className}`} style={{ transform: `rotate(${rotation}deg)` }}>
      <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 20C20 8.95431 11.0457 0 0 0H20V20Z" fill="currentColor" />
      </svg>
    </div>
  );
};

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const bgColorClass = isDark ? 'text-slate-900' : 'text-white';
  const textColorClass = isDark ? 'text-white' : 'text-slate-900';
  const menuBgClass = isDark ? 'bg-slate-900' : 'bg-white';

  return (
    <>
      <div className={`fixed top-0 left-0 z-50 flex items-center pr-2 pb-2 ${bgColorClass} transition-colors duration-300`}>
        <div className={`relative px-6 py-4 flex items-center gap-6 bg-current rounded-br-3xl`}>
          <div className="flex items-center gap-2 cursor-pointer">
            <div className={`p-1.5 rounded-full ${isDark ? 'bg-white text-slate-900' : 'bg-slate-900 text-white'}`}>
              <Disc size={20} />
            </div>
            <span className={`font-bold text-lg tracking-wider ${isDark ? 'text-white' : 'text-slate-900'}`}>MOONVEIL</span>
          </div>

          <button 
            onClick={toggleTheme}
            className={`flex items-center gap-2 px-1 py-1 rounded-full transition-all duration-300 border ${isDark ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-slate-100'}`}
          >
            <div className={`p-1 rounded-full transition-all duration-300 ${isDark ? 'bg-transparent text-slate-500' : 'bg-white shadow-sm text-yellow-500'}`}>
              <Sun size={14} />
            </div>
            <div className={`p-1 rounded-full transition-all duration-300 ${isDark ? 'bg-slate-700 text-white shadow-sm' : 'bg-transparent text-slate-400'}`}>
              <Moon size={14} />
            </div>
          </button>

          <Curve className="absolute -right-5 top-0" rotation="0" />
          <Curve className="absolute left-0 -bottom-5" rotation="0" />
        </div>
      </div>

      <div className={`fixed top-0 right-0 z-50 flex items-center pl-2 pb-2 ${bgColorClass} transition-colors duration-300`}>
        <div className="relative bg-current px-5 py-4 rounded-bl-3xl">
          <button 
            onClick={toggleMenu}
            className={`flex items-center gap-2 font-medium text-sm hover:opacity-70 transition-opacity ${textColorClass}`}
          >
            <span>Menu</span>
            <Menu size={20} />
          </button>

          <Curve className="absolute -left-5 top-0" rotation="-90" />
          <Curve className="absolute right-0 -bottom-5" rotation="-90" />
        </div>
      </div>

      <div 
        className={`fixed inset-0 z-40 transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} ${menuBgClass}`}
      >
        <div className="h-full flex flex-col p-6">
          <div className="flex justify-between items-center mb-10">
            <span className={`text-xl font-bold ${textColorClass}`}>Navigation</span>
            <button 
              onClick={toggleMenu}
              className={`p-2 rounded-full hover:bg-black/5 transition-colors ${textColorClass}`}
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-4">
            {['Home', 'About', 'Feature', 'Community', 'FAQ'].map((item, idx) => (
              <a 
                key={idx} 
                href={`#${item.toLowerCase()}`}
                onClick={toggleMenu}
                className={`text-3xl md:text-5xl font-bold flex items-center justify-between group py-4 border-b ${isDark ? 'border-slate-800 text-slate-300 hover:text-white' : 'border-slate-200 text-slate-600 hover:text-black'} transition-colors`}
              >
                {item}
                <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="mt-auto">
             <button className="w-full py-4 rounded-xl bg-purple-600 text-white font-bold text-lg hover:bg-purple-700 transition-colors">
                Join Discord Server
             </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;