const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/hero/background.webp')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left">
          
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              What are you looking for in Moonveil?
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Explore endless possibilities and begin your adventure with us.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started
            </button>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/hero/moonveil.webp" 
              alt="Moonveil Character" 
              className="w-3/4 md:w-full max-w-sm md:max-w-md h-auto"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;