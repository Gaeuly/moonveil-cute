import DiscordIcon from '../components/icons/DiscordIcon';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 md:px-12">
      <nav className="py-5 flex justify-between items-center">
        <a href="#hero">
          <img src="/logo.webp" alt="Moonveil Logo" className="h-10 sm:h-12 w-auto" />
        </a>

        <div className="flex items-center gap-4">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <DiscordIcon className="w-7 h-7" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;