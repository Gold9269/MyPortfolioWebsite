import { useState, useEffect } from 'react';
import { navLinks } from '../constants/index.js';

const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <a href={item.href} className="nav-li_a" onClick={onClick}>
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  // Initialize theme from localStorage or default to 'dark'
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${theme === 'dark' ? 'bg-black' : 'bg-black-100'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a href="/" className="nav-brand">
            Nishant Chopra
          </a>

          <button
            onClick={toggleMenu}
            className="menu-toggle sm:hidden flex"
            aria-label="Toggle menu">
            <img 
              src={isOpen ? '/assets/close.svg' : '/assets/menu.svg'} 
              alt="toggle" 
              className="w-6 h-6" 
            />
          </button>

          {/* Theme Toggle Button */}
          <button
  onClick={toggleTheme}
  className="theme-toggle sm:flex hidden items-center"
  aria-label="Toggle theme">
  <div className="w-16 h-8 rounded-full bg-gradient-to-r from-[#333333] via-[#444444] to-[#555555] flex items-center p-1 transition-all duration-300 relative">
    <div
      className={`w-6 h-6 rounded-full bg-white transition-transform duration-300 flex items-center justify-center ${
        theme === 'dark' ? 'translate-x-8' : ''
      }`}
    >
      {theme === 'dark' ? (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="transition-colors duration-300"
      >     
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
      ) : (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="12" cy="12" r="4" fill="currentColor"/>
  <path d="M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.6859L4.8999 19.1001M17.6859 17.6859L19.1001 19.1001M22 12H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>

      )}
    </div>
  </div>
          </button>


          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;