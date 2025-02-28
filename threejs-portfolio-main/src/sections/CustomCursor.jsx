import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isClicking, setIsClicking] = useState(false);
  const [visible, setVisible] = useState(true);
  const [size, setSize] = useState(window.innerWidth < 768 ? 24 : 32);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    let animationFrame;

    const updateSize = () => {
      const mobileCheck = window.innerWidth < 768;
      setSize(mobileCheck ? 24 : 32);
      setIsMobile(mobileCheck);
    };

    const moveCursor = (e) => {
      if (isMobile) return;

      // Check if modal is open
      if (document.body.classList.contains("cursor-disabled")) {
        setModalOpen(true);
        setVisible(false);
        return;
      } else {
        setModalOpen(false);
      }

      if (
        e.target.closest("#chatbot-icon") ||
        e.target.closest("#chatbot-window")
      ) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    // Monitor the cursor-disabled class
    const checkModalStatus = () => {
      const isModalOpen = document.body.classList.contains("cursor-disabled");
      setModalOpen(isModalOpen);
      setVisible(!isModalOpen);
    };

    window.addEventListener("resize", updateSize);
    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", () => setVisible(false));
    document.addEventListener("mouseenter", () => {
      if (!modalOpen) setVisible(true);
    });
    
    // Check modal status when component mounts and when DOM changes
    checkModalStatus();
    const observer = new MutationObserver(checkModalStatus);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    updateSize();

    return () => {
      window.removeEventListener("resize", updateSize);
      document.removeEventListener("mousemove", moveCursor);
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [isMobile, modalOpen]);

  useEffect(() => {
    const handleMouseDown = () => {
      setIsClicking(true);
      setTimeout(() => setIsClicking(false), 80);
    };

    window.addEventListener("mousedown", handleMouseDown);
    return () => window.removeEventListener("mousedown", handleMouseDown);
  }, []);

  // Return null if mobile or modal is open
  if (isMobile || modalOpen) return null;

  return (
    <motion.div
      className="fixed pointer-events-none"
      animate={{
        x: position.x,
        y: position.y,
        scale: isClicking ? 0.95 : 1,
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: "tween", duration: 0.08 }}
      style={{
        top: 0,
        left: 0,
        zIndex: 99999,
        width: `${size}px`,
        height: `${size * 1.5}px`,
      }}
    >
      <svg
        width={size}
        height={size * 1.5}
        viewBox="0 0 32 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="2,2 2,40 12,30 27,35"
          fill="url(#gradient)"
          stroke="black"
          strokeWidth="2"
          filter="url(#glow)"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7000ff" />
            <stop offset="100%" stopColor="#ff00ff" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="blurred" />
            <feMerge>
              <feMergeNode in="blurred" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </motion.div>
  );
};

export default CustomCursor;