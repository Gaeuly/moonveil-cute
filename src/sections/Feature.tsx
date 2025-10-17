const features = [
  { name: 'status', imgSrc: '/feature/bat.webp', link: '#' },
  { name: 'commands', imgSrc: '/feature/rabbit.webp', link: '#' },
  { name: 'donate', imgSrc: '/feature/bear.webp', link: '#' },
  { name: 'support', imgSrc: '/feature/fox.webp', link: '#' },
  { name: 'docs', imgSrc: '/feature/slime.webp', link: '#' },
];

const Feature = () => {
  const gradientStyle = `
    @keyframes gradient-animation-feature {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .animated-gradient-feature {
      background: linear-gradient(-45deg, #a5d3e6, #c7f1a5, #a880d2, #a5d3e6);
      background-size: 400% 400%;
      animation: gradient-animation-feature 18s ease infinite;
    }
  `;

  return (
    <>
      <style>{gradientStyle}</style>
      <section id="feature" className="py-20 animated-gradient-feature">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-kg-corner text-5xl sm:text-6xl text-white font-bold mb-4">
            Moonveil Bot
          </h2>
          <p className="font-ubuntu text-xl sm:text-2xl text-white/90 mb-12">
            currency system
          </p>

      
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6">
            {features.map((feature) => (
              <a 
                href={feature.link} 
                key={feature.name}
                className="group transform transition-transform duration-300 hover:-translate-y-2"
              >
                <img 
                  src={feature.imgSrc} 
                  alt={feature.name} 
                  className="w-full max-w-[150px] mx-auto mb-2" 
                />
                <span className="font-ubuntu text-lg font-semibold text-white/90 group-hover:text-white transition-colors duration-300">
                  {feature.name}
                </span>
              </a>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Feature;