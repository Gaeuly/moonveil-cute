const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/hero/background.webp')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              What are you looking for in Moonveil?
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Explore endless possibilities and begin your adventure with us.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started
            </button>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <img 
              src="/hero/moonveil.webp" 
              alt="Moonveil Character" 
              className="w-full max-w-md h-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;