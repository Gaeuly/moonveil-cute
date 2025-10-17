const features = [
  { name: 'status', imgSrc: '/feature/bat.webp', link: 'https://www.moonveil.cyou/status' },
  { name: 'commands', imgSrc: '/feature/rabbit.webp', link: 'https://www.moonveil.cyou/commands' },
  { name: 'donate', imgSrc: '/feature/bear.webp', link: '#' },
  { name: 'support', imgSrc: '/feature/fox.webp', link: '#' },
  { name: 'docs', imgSrc: '/feature/slime.webp', link: 'https://www.moonveil.cyou/docs' },
];

const BrushStroke = () => (
  <svg 
    className="absolute inset-0 w-full h-full text-green-300/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" 
    viewBox="0 0 200 100" 
    preserveAspectRatio="none"
  >
    <path 
      d="M10 50 Q 50 20, 100 50 T 190 50" 
      stroke="currentColor" 
      strokeWidth="40" 
      strokeLinecap="round" 
      fill="none"
    />
  </svg>
);

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

          <div className="flex flex-wrap justify-center items-baseline gap-x-6 gap-y-8">
            {features.map((feature) => (
              <a
                href={feature.link}
                key={feature.name}
                target="_blank" 
                rel="noopener noreferrer"
                className="group w-1/3 md:w-1/6 max-w-[150px] text-center"
              >
                <div className="relative inline-block transform transition-transform duration-300 group-hover:-translate-y-2">
                  <BrushStroke />
                  <img
                    src={feature.imgSrc}
                    alt={feature.name}
                    className="relative w-full h-auto mx-auto mb-2"
                  />
                </div>
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