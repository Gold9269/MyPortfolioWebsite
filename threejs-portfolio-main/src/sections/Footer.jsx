import { useState, useEffect } from 'react';

// Custom hook to detect dark mode based on the data-theme attribute
const useDarkMode = () => {
  const [isDark, setIsDark] = useState(
    document.documentElement.getAttribute('data-theme') === 'dark'
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.getAttribute('data-theme') === 'dark');
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
    return () => observer.disconnect();
  }, []);

  return isDark;
};

const Footer = () => {
  const isDarkMode = useDarkMode();

  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>My Portfolio Website</p>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/Gold9269" target="_blank" rel="noopener noreferrer">
          <div className="social-icon">
            <img
              src={isDarkMode ? '/assets/github.svg' : '/assets/github-dark.svg'}
              alt="GitHub"
              className="w-1/2 h-1/2"
            />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/nishant-chopra-4u2u2005/" target="_blank" rel="noopener noreferrer">
          <div className="social-icon">
            <img
              src={isDarkMode ? '/assets/Linkedin.svg' : '/assets/linkedin-dark.svg'}
              alt="LinkedIn"
              className="w-1/2 h-1/2"
            />
          </div>
        </a>
        <a href="https://www.instagram.com/nishantchopra04?igsh=dGs2dmc5Z3F1N3ph&utm_source=qr" target="_blank" rel="noopener noreferrer">
          <div className="social-icon">
            <img
              src={isDarkMode ? '/assets/instagram.svg' : '/assets/instagram-dark.svg'}
              alt="Instagram"
              className="w-1/2 h-1/2"
            />
          </div>
        </a>
      </div>

      <p className="text-white-500">© Nishant Chopra. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
