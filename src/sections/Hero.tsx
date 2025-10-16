const Hero = () => {
  const animationStyles = `
    @keyframes slideInFromRight {
      0% {
        transform: translateX(100%);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }
    .animate-slide-in {
      animation: slideInFromRight 1s ease-out forwards;
    }
  `;

  return (
    <>
      <style>{animationStyles}</style>
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/hero/background.webp')" }}
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            
            <div className="w-full md:w-1/2">
              <h1 className="font-kg-corner text-[#FFFFFF] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                What are you looking for in Moonveil?
              </h1>
              <p className="font-ubuntu text-[#4A2E4F] text-lg sm:text-xl mb-8">
                Explore endless possibilities and begin your adventure with us.
              </p>
              <button className="font-ubuntu bg-[#6D4A70] hover:bg-[#5B3C5E] text-[#F5F1EE] font-bold py-3 px-8 rounded-full text-base transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Started
              </button>
            </div>
            
            <div className="w-full md:w-1/2 flex justify-center">
              <img 
                src="/hero/moonveil.webp" 
                alt="Moonveil Character" 
                className="w-full h-auto max-w-[280px] sm:max-w-xs md:max-w-md animate-slide-in"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;