import React, { useState } from 'react';

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
        <div className="text-gray-200 pt-2" style={{ fontFamily: "'Ubuntu', sans-serif" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  const [showAll, setShowAll] = useState(false);

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
    { date: '2025.10.16', title: 'Moonveil Grand Launch Announced!', content: 'We are thrilled to announce the official grand launch of the Moonveil universe! Mark your calendars for a universe-wide celebration.' },
    { date: '2025.09.28', title: 'New Creator Tools & Asset Packs Released', content: 'Empowering our community is our top priority. Today, we have released a new suite of creator tools.' },
    { date: '2025.09.15', title: 'Community Spotlight: The First Wave of Heroes', content: 'We are officially kicking off our first Community Spotlight series! Nominate your favorite creators and get ready to be inspired.' },
    { date: '2025.08.30', title: 'The Veilguard Faction Rises', content: 'A new faction, the Veilguard, has emerged from the shadows. Learn about their lore, abilities, and how you can join their ranks.' },
    { date: '2025.08.12', title: 'Major Performance & Graphics Update', content: 'Experience Moonveil like never before with our latest update, featuring significant performance improvements and stunning graphical enhancements.' },
    { date: '2025.07.25', title: 'First Annual Moonveil Art Contest', content: 'Calling all artists! Showcase your talent in our first-ever art contest. The theme is "Echoes of the Cosmos". Amazing prizes await!' },
    { date: '2025.07.05', title: 'Developer Q&A: The Future of Moonveil', content: 'Join us for a live Q&A session with the lead developers. Get insights into upcoming features, lore expansions, and the long-term vision for Moonveil.' },
    { date: '2025.06.20', title: 'New Region Unlocked: The Sunken City of Lyra', content: 'A vast, mysterious underwater region is now available for exploration. Discover ancient secrets, new creatures, and untold treasures in the depths.' },
  ];

  const visibleFaqs = showAll ? faqData : faqData.slice(0, 3);

  return (
    <>
      <style>{gradientStyle}</style>
      <section id="faq" className="py-20 px-4 sm:px-6 animated-gradient-faq">
        <div className="container mx-auto max-w-4xl">
          <h2 
            className="text-4xl sm:text-5xl font-bold mb-12 text-left"
            style={{ fontFamily: "'KGCorneroftheSky', sans-serif", color: '#FFFFFF' }}
          >
            Moonveil News
          </h2>
          <div>
            {visibleFaqs.map((item, index) => (
              <AccordionItem key={index} title={item.title} date={item.date}>
                <p>{item.content}</p>
              </AccordionItem>
            ))}
          </div>

          {!showAll && (
            <div className="mt-8 flex justify-center">
              <button onClick={() => setShowAll(true)} className="focus:outline-none transition-transform duration-300 hover:scale-105">
                <img src="/faq/viewall.webp" alt="View All News" className="w-full max-w-xs" />
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Faq;