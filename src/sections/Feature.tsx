const features = [
  { name: 'status', imgSrc: '/feature/bat.webp', link: 'https://www.moonveil.cyou/status', brush: 'green' },
  { name: 'commands', imgSrc: '/feature/rabbit.webp', link: 'https://www.moonveil.cyou/commands', brush: 'pink' },
  { name: 'donate', imgSrc: '/feature/bear.webp', link: '#', brush: 'yellow' },
  { name: 'support', imgSrc: '/feature/fox.webp', link: '#', brush: 'blue' },
  { name: 'docs', imgSrc: '/feature/slime.webp', link: 'https://www.moonveil.cyou/docs', brush: 'purple' },
];

const BrushStroke = ({ type }) => {
  const brushes = {
    green: {
      path: "M10 50 Q 50 20, 100 50 T 190 50",
      color: "text-green-300/80",
    },
    pink: {
      path: "M10 40 C 40 10, 80 10, 110 40 S 160 70, 190 40",
      color: "text-pink-300/80",
    },
    yellow: {
      path: "M20 60 C 50 80, 100 80, 130 60 S 180 40, 200 60",
      color: "text-yellow-300/80",
    },
    blue: {
        path: "M5 55 C 50 30, 100 30, 150 55 S 200 80, 200 55",
        color: "text-blue-300/80",
    },
    purple: {
        path: "M15 45 Q 60 70, 105 45 T 195 45",
        color: "text-purple-300/80",
    },
  };

  const selectedBrush = brushes[type] || brushes.green;

  return (
    <svg 
      className={`absolute inset-0 w-full h-full ${selectedBrush.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} 
      viewBox="0 0 200 100" 
      preserveAspectRatio="none"
    >
      <path 
        d={selectedBrush.path}
        stroke="currentColor" 
        strokeWidth="45" 
        strokeLinecap="round" 
        fill="none"
      />
    </svg>
  );
};


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

          <div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-10 justify-items-center">
            {features.map((feature) => (
              <a
                href={feature.link}
                key={feature.name}
                target="_blank" 
                rel="noopener noreferrer"
                className="group w-full max-w-[150px] text-center"
              >
                <div className="relative inline-block transform transition-transform duration-300 group-hover:-translate-y-2">
                  <BrushStroke type={feature.brush} />
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
      section>
    </>
  );
};

export default Feature;