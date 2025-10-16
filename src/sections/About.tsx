const About = () => {
  const gradientStyle = `
    @keyframes gradient-animation-about {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .animated-gradient-about {
      background: linear-gradient(-45deg, #C8B6E2, #7EDDF0, #a880d2, #79b3e0);
      background-size: 400% 400%;
      animation: gradient-animation-about 18s ease infinite;
    }
  `;

  return (
    <>
      <style>{gradientStyle}</style>
      <section 
        id="about" 
        className="py-20 animated-gradient-about overflow-hidden" 
      >
        <div className="w-full px-[6%] md:px-12">
          <div className="flex flex-wrap items-center">
            
            <div className="w-full text-left">
              <img 
                src="/about/about.webp" 
                alt="About Moonveil Logo" 
                className="w-full max-w-sm sm:max-w-md mb-8"
              />
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white font-kg-corner">
                About Moonveil
              </h2>
              
              <p className="text-lg sm:text-xl font-bold mb-4 text-white/90 font-ubuntu">
                Moonveil is a digital universe, a unique and memorable identity for creators, dreamers, and adventurers.
              </p>
              
              <p className="text-base sm:text-lg mb-6 text-white/90 font-ubuntu max-w-4xl">
                The name "Moonveil" evokes a sense of mystery, magic, and boundless potential. It's the perfect home for anime clubs, developers, cosplayers, artists, and anyone with a passion to create and share.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white font-ubuntu">
                Our Vision
              </h3>

              <p className="text-base sm:text-lg text-white/90 font-ubuntu max-w-4xl">
                Our vision is to provide a space where creativity thrives. Anyone can use Moonveil to express themselves online, build communities, and launch their next big idea.
              </p>
            </div>

            <div className="w-full flex justify-center items-center mt-16">
              <img 
                src="/about/moonchan.webp" 
                alt="Moonveil Character" 
                className="w-full max-w-lg"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;