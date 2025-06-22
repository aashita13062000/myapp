import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <nav className="bg-gray-900 text-white px-4 py-3 flex items-center justify-between sticky top-0 z-50 dark:bg-gray-800">
      <h1 className="text-xl font-bold">Aashita</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 items-center">
        <li><a href="#home" className="hover:text-blue-400">Home</a></li>
        <li><a href="#about" className="hover:text-blue-400">About</a></li>
        <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        <li><a href="#resume" className="hover:text-blue-400">Resume</a></li>
        <li>
          <button onClick={() => setDark(!dark)} className="text-sm border px-2 py-1 rounded hover:bg-gray-700">
            {dark ? '☀️' : '🌙'}
          </button>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-xl"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900 text-white py-4 px-4 flex flex-col gap-3 md:hidden dark:bg-gray-800">
          <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">About</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Contact</a>
          <a href="#resume" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Resume</a>
          <button
            onClick={() => {
              setDark(!dark);
              setMenuOpen(false);
            }}
            className="text-sm border px-2 py-1 rounded hover:bg-gray-700"
          >
            {dark ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
