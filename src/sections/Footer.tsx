import React from 'react';

const Footer = () => {
  return (
    <footer 
      id="footer-section" 
      className="bg-[#1A1A2E] text-white relative"
    >
      <style>
        {`
          #footer-section {
            padding: 50px;
            background: url(/footer.webp) 150% 53% no-repeat;
            background-size: 72vw auto;
          }

          @media screen and (max-width: 768px) {
            #footer-section {
              padding: 50px 6%;
              background-size: 64vw auto;
            }
          }

          @media screen and (max-width: 660px) {
            #footer-section {
              background-position: 110% 53%;
              background-size: 40vw auto;
            }
          }

          @media screen and (max-width: 500px) {
            #footer-section {
              background-image: url(/footer.webp);
              background-position: 114% bottom;
              background-size: 46vw auto;
              background-repeat: no-repeat;
            }
          }
        `}
      </style>

      <div className="w-full md:w-3/5 lg:w-1/2">
        <img src="/logo.webp" alt="Moonveil Logo" className="w-56 mb-8" />
        <p 
          className="text-base text-gray-300 mb-6"
          style={{ fontFamily: "'Ubuntu', sans-serif" }}
        >
          Moonveil is a universe dedicated to creators, adventurers, and dreamers. Our mission is to provide a unique, relevant, and descriptive alternative to existing digital extensions.
        </p>
        <p
          className="text-base text-gray-400 mb-8 md:pr-[34%]"
          style={{ fontFamily: "'Ubuntu', sans-serif" }}
        >
          Our platform operates under the highest standards, ensuring a safe and vibrant space for our global community to connect and create.
        </p>
        <p 
          className="text-sm text-gray-500"
          style={{ fontFamily: "'Ubuntu', sans-serif" }}
        >
          © 2025 Moonveil. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;