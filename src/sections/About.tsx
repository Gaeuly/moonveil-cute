const About = () => {
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
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
            
            <div className="w-full md:w-1/2 text-left">
              <img 
                src="/about/about.webp" 
                alt="About Moonveil Logo" 
                className="w-full max-w-xs mb-6"
              />
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
                The name "Moonveil" evokes a sense of mystery, magic, and boundless potential. It's the perfect home for anime clubs, developers, cosplayers, artists, and anyone with a passion to create and share.
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
                Our vision is to provide a space where creativity thrives. Anyone can use Moonveil to express themselves online, build communities, and launch their next big idea.
              </p>
            </div>

            <div className="w-full md:w-1/2 hidden md:flex justify-center items-center">
              <img 
                src="/about/moonchan.webp" 
                alt="Moonveil Character" 
                className="w-full max-w-md md:max-w-lg"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;