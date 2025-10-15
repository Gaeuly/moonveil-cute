const About = () => {
  // CSS untuk animasi gradasi, di-hardcode di sini agar tidak mempengaruhi section lain.
  const gradientStyle = `
    @keyframes gradient-animation-about {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .animated-gradient-about {
      background: linear-gradient(-45deg, #C8B6E2, #7ED6DF, #a880d2, #79b3e0);
      background-size: 400% 400%;
      animation: gradient-animation-about 18s ease infinite;
    }
  `;

  return (
    <>
      <style>{gradientStyle}</style>
      <section 
        id="about" 
        className="py-20 px-4 sm:px-6 animated-gradient-about"
      >
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            
            {/* Kolom Teks (Kiri di Desktop) */}
            <div className="w-full md:w-3/5 text-left">
              <h2 
                className="text-4xl sm:text-5xl font-bold mb-4"
                style={{ fontFamily: "'KGCorneroftheSky', sans-serif", color: '#FFFFFF' }}
              >
                About Moonveil
              </h2>
              
              <p 
                className="text-lg sm:text-xl font-bold mb-4"
                style={{ fontFamily: "'Ubuntu', sans-serif", color: '#E0E7FF' }}
              >
                Moonveil is a digital universe, a unique and memorable identity for creators, dreamers, and adventurers.
              </p>
              
              <p 
                className="text-base sm:text-lg mb-6"
                style={{ fontFamily: "'Ubuntu', sans-serif", color: '#E0E7FF' }}
              >
                The name "Moonveil" evokes a sense of mystery, magic, and boundless potential. It's a realm born from the fabric of imagination, rooted in the culture of storytelling, gaming, and digital art. It's the perfect home for anime clubs, developers, cosplayers, artists, and anyone with a passion to create and share.
              </p>

              <h3
                className="text-xl sm:text-2xl font-bold mb-3"
                style={{ fontFamily: "'Ubuntu', sans-serif", color: '#FFFFFF' }}
              >
                Our Vision
              </h3>

              <p 
                className="text-base sm:text-lg"
                style={{ fontFamily: "'Ubuntu', sans-serif", color: '#E0E7FF' }}
              >
                Our vision is to provide a space where creativity thrives. You don't have to be a "certified" geek to register your own Moonveil identity. Anyone can use Moonveil to express themselves online, build communities, and launch their next big idea.
              </p>
            </div>

            {/* Kolom Gambar (Kanan di Desktop) */}
            <div className="w-full md:w-2/5 flex justify-center items-center mt-8 md:mt-0">
              <img 
                src="/about/about.webp" 
                alt="About Moonveil Character" 
                className="w-full max-w-sm md:max-w-full rounded-lg"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;