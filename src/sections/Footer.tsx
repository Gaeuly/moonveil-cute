import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A2E] text-white relative overflow-hidden py-20 md:py-28">
      <div className="container mx-auto px-6 h-full">
        <div className="flex flex-col justify-between h-full">
          
          <div className="relative z-10 w-full md:w-1/2 lg:w-2/5 text-left">
            <img src="/logo.webp" alt="Moonveil Logo" className="w-56 mb-8" />
            <p 
              className="text-base text-gray-300 mb-8"
              style={{ fontFamily: "'Ubuntu', sans-serif" }}
            >
              Moonveil is a universe dedicated to creators, adventurers, and dreamers. Our mission is to provide a unique, relevant, and descriptive alternative to existing digital extensions.
            </p>
            <p 
              className="text-base text-gray-500"
              style={{ fontFamily: "'Ubuntu', sans-serif" }}
            >
              © 2025 Moonveil. All Rights Reserved.
            </p>
          </div>

        </div>
      </div>
      
      <div className="absolute inset-y-0 right-0 w-full md:w-3/4 lg:w-3/5 pointer-events-none">
        <img 
          src="/footer.webp" 
          alt="Footer Character" 
          className="absolute bottom-0 right-0 w-auto h-[100%] md:h-[130%] max-w-none object-contain object-right-bottom"
        />
      </div>

    </footer>
  );
};

export default Footer;