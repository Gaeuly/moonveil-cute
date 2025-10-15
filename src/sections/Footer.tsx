import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A2E] text-white relative overflow-hidden">
      <div className="container mx-auto px-6 py-20 md:py-28 h-full">
        <div className="relative flex flex-col md:flex-row justify-between h-full">
          
          <div className="relative z-10 w-full md:w-1/2 lg:w-2/5 text-left pr-8 md:pr-0">
            <img src="/logo.webp" alt="Moonveil Logo" className="w-56 mb-8" />
            <p 
              className="text-base text-gray-300 mb-6"
              style={{ fontFamily: "'Ubuntu', sans-serif" }}
            >
              Moonveil is a universe dedicated to creators, adventurers, and dreamers. Our mission is to provide a unique, relevant, and descriptive alternative to existing digital extensions.
            </p>
            <p
              className="text-base text-gray-400 mb-8"
              style={{ fontFamily: "'Ubuntu', sans-serif" }}
            >
              Our platform operates under the highest standards, ensuring a safe and vibrant space for our global community to connect and create.
            </p>
            <p 
              className="text-base text-gray-500"
              style={{ fontFamily: "'Ubuntu', sans-serif" }}
            >
              © 2025 Moonveil. All Rights Reserved.
            </p>
          </div>

          <div className="absolute inset-0 w-full h-full pointer-events-none">
            <img 
              src="/footer.webp" 
              alt="Footer Character" 
              className="absolute bottom-0 right-0 w-auto h-[70%] sm:h-[85%] md:h-[160%] max-w-none object-contain object-right-bottom"
            />
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;