import DiscordIcon from '../components/icons/DiscordIcon';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero">
          <img src="/logo.webp" alt="Moonveil Logo" className="h-10 w-auto" />
        </a>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <DiscordIcon />
          </a>
          {/* Tambahkan ikon lain di sini jika perlu */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;