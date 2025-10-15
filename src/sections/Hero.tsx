const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/hero/background.webp')" }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-row items-center gap-4 sm:gap-8">
          
          <div className="w-1/2 text-left">
            <h1 className="font-kg-corner text-title-cream text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2 sm:mb-4">
              What are you looking for in Moonveil?
            </h1>
            <p className="font-ubuntu text-text-brown text-xs sm:text-lg md:text-xl mb-4 sm:mb-8">
              Explore endless possibilities and begin your adventure with us.
            </p>
            <button className="font-ubuntu bg-button-brown hover:bg-button-brown-hover text-title-cream font-bold py-2 px-4 sm:py-3 sm:px-8 rounded-full text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started
            </button>
          </div>
          
          <div className="w-1/2 flex justify-center">
            <img 
              src="/hero/moonveil.webp" 
              alt="Moonveil Character" 
              className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;