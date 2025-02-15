const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>My Portfolio Website</p>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/Gold9269" target="_blank" rel="noopener noreferrer">
          <div className="social-icon">
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/nishant-chopra-4u2u2005/" target="_blank" rel="noopener noreferrer">
          <div className="social-icon">
            <img src="/assets/Linkedin.svg" alt="twitter" className="w-1/2 h-1/2" />
          </div>
        </a>
        <a href="https://www.instagram.com/nishantchopra04?igsh=dGs2dmc5Z3F1N3ph&utm_source=qr" target="_blank" rel="noopener noreferrer">
          <div className="social-icon">
            <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
          </div>
        </a>
      </div>

      <p className="text-white-500">© Nishant Chopra. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
