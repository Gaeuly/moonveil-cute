import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A2E] text-white relative overflow-hidden pt-20 pb-10">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="md:w-1/2 text-left mb-10 md:mb-0">
            <img src="/logo.webp" alt="Moonveil Logo" className="w-48 mb-6" />
            <p 
              className="max-w-md text-gray-400 mb-6"
              style={{ fontFamily: "'Ubuntu', sans-serif" }}
            >
              Moonveil is a universe dedicated to creators, adventurers, and dreamers. Our mission is to provide a unique, relevant, and descriptive alternative to existing digital extensions.
            </p>
            <p 
              className="text-sm text-gray-500"
              style={{ fontFamily: "'Ubuntu', sans-serif" }}
            >
              © 2025 Moonveil. All Rights Reserved.
            </p>
          </div>

        </div>
      </div>
      
      <div className="absolute right-0 top-0 h-full w-1/2 md:w-2/3 lg:w-1/2 flex items-end justify-end opacity-50 md:opacity-100">
        <img 
          src="/footer.webp" 
          alt="Footer Character" 
          className="object-contain object-right-bottom h-full max-w-none"
        />
      </div>
    </footer>
  );
};

export default Footer;