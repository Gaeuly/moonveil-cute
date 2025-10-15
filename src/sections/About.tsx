const About = () => {
  const gradientStyle = `
    @keyframes gradient-animation {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .animated-gradient-about {
      background: linear-gradient(-45deg, #a880d2, #79b3e0, #88615d, #a880d2);
      background-size: 400% 400%;
      animation: gradient-animation 15s ease infinite;
    }
  `;

  return (
    <>
      <style>{gradientStyle}</style>
      <section 
        id="about" 
        className="min-h-screen py-20 px-4 flex items-center justify-center animated-gradient-about"
      >
        <div className="container mx-auto text-center">
          <img 
            src="/about/about.webp" 
            alt="About Moonveil" 
            className="mx-auto mb-8 w-full max-w-md rounded-lg"
          />
          <h2 
            className="text-4xl sm:text-5xl font-bold mb-6"
            style={{ fontFamily: "'KGCorneroftheSky', sans-serif", color: '#FFE5B4' }}
          >
            About Moonveil
          </h2>
          <p 
            className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed text-white"
            style={{ fontFamily: "'Ubuntu', sans-serif" }}
          >
            Moonveil is more than just a name; it's a universe of stories waiting to be discovered. A realm born from creativity, community, and the shared dream of adventure. Here, every individual can find their own path, connect with fellow travelers, and become part of a story that's constantly unfolding. Join us and unveil the magic within.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;