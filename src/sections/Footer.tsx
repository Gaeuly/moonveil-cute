const Footer = () => {
  return (
    <footer 
      id="footer-section" 
      className="relative"i
    >
      <style>
        {`
          #footer-section {
            padding: 50px;
            background: url(/footer.webp) 150% 53% no-repeat;
            background-color: #1A1A2E; /* Warna background ditambahkan di sini */
            background-size: 72vw auto;
            color: #FFF; /* Default text color */
          }

          .footer-content-wrapper {
            width: 100%;
          }
          
          @media screen and (min-width: 768px) {
             .footer-content-wrapper {
               width: 50%;
             }
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
             .footer-content-wrapper {
               width: 80%;
             }
          }

          @media screen and (max-width: 500px) {
            #footer-section {
              /* Penting: Hapus background-image di sini agar tidak dobel */
              background-image: none;
              padding-bottom: 120px; /* Beri ruang untuk gambar di bawah */
            }
            .footer-image-mobile {
              display: block;
              position: absolute;
              bottom: 0;
              right: 0;
              width: 46vw;
              height: auto;
            }
            .footer-content-wrapper {
               width: 100%;
             }
          }
        `}
      </style>

      <div className="footer-content-wrapper">
        <img src="/logo.webp" alt="Moonveil Logo" className="w-56 mb-8" />
        <p className="text-base text-gray-300 mb-6 font-ubuntu">
          Moonveil is a universe dedicated to creators, adventurers, and dreamers. Our mission is to provide a unique, relevant, and descriptive alternative to existing digital extensions.
        </p>
        <p className="text-base text-gray-400 mb-8 font-ubuntu">
          Our platform operates under the highest standards, ensuring a safe and vibrant space for our global community to connect and create.
        </p>
        <p className="text-sm text-gray-500 font-ubuntu">
          © 2018 Moonveil. All Rights Reserved.
        </p>
      </div>
      <img 
        src="/footer.webp"
        alt="Footer Character"
        className="footer-image-mobile hidden"
      />
    </footer>
  );
};

export default Footer;