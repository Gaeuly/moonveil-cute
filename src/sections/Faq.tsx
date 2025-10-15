import React, { useState } from 'react';

// Komponen untuk satu item Accordion/FAQ
const AccordionItem = ({ title, date, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/20 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <div>
          <p className="text-sm text-gray-200" style={{ fontFamily: "'Ubuntu', sans-serif" }}>{date}</p>
          <h3 className="text-xl sm:text-2xl text-white mt-1" style={{ fontFamily: "'Ubuntu', sans-serif" }}>
            {title}
          </h3>
        </div>
        <span className="text-3xl text-white transform transition-transform duration-300" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}>
          +
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}
      >
        <div className="text-gray-200" style={{ fontFamily: "'Ubuntu', sans-serif" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

// Komponen utama untuk Section FAQ
const Faq = () => {
  const gradientStyle = `
    @keyframes gradient-animation-faq {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .animated-gradient-faq {
      background: linear-gradient(-45deg, #1D2B64, #F8CDDA, #2C5364, #203A43);
      background-size: 400% 400%;
      animation: gradient-animation-faq 20s ease infinite;
    }
  `;

  const faqData = [
    {
      date: '2025.10.16',
      title: 'Moonveil Grand Launch Announced!',
      content: 'We are thrilled to announce the official grand launch of the Moonveil universe! Mark your calendars for a universe-wide celebration filled with exclusive events, special rewards, and the beginning of a new epic saga. More details to be revealed soon!'
    },
    {
      date: '2025.09.28',
      title: 'New Creator Tools & Asset Packs Released',
      content: 'Empowering our community is our top priority. Today, we have released a new suite of creator tools, including an advanced avatar customizer and new asset packs for world-building. Let your imagination run wild and show us what you can create!'
    },
    {
      date: '2025.09.15',
      title: 'Community Spotlight: The First Wave of Heroes',
      content: 'We are officially kicking off our first Community Spotlight series! We will be showcasing the most creative, inspiring, and adventurous members of the Moonveil community. Nominate your favorite creators and get ready to be inspired.'
    },
  ];

  return (
    <>
      <style>{gradientStyle}</style>
      <section id="faq" className="py-20 px-4 sm:px-6 animated-gradient-faq">
        <div className="container mx-auto max-w-4xl">
          <h2 
            className="text-4xl sm:text-5xl font-bold mb-12 text-center"
            style={{ fontFamily: "'KGCorneroftheSky', sans-serif", color: '#FFFFFF' }}
          >
            Moonveil News
          </h2>
          <div>
            {faqData.map((item, index) => (
              <AccordionItem key={index} title={item.title} date={item.date}>
                <p>{item.content}</p>
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;