import { Moon, Sun } from "lucide-react";
import { useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  // Placeholder logic Toggle
  const toggleTheme = () => {
    setIsDark(!isDark);
    // Nanti lu isi logic ganti class 'dark' di html disini
    console.log("Theme changed to:", !isDark ? "Dark" : "Light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle Theme"
    >
      {/* Icon ganti-ganti base on state */}
      {isDark ? (
        <Moon size={20} className="text-gray-800" />
      ) : (
        <Sun size={20} className="text-gray-800" />
      )}
    </button>
  );
};

export default ThemeToggle;