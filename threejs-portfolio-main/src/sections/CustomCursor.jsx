import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isClicking, setIsClicking] = useState(false);
  const [visible, setVisible] = useState(true);
  const [size, setSize] = useState(window.innerWidth < 768 ? 24 : 32);

  useEffect(() => {
    let animationFrame;

    const updateSize = () => {
      setSize(window.innerWidth < 768 ? 24 : 32);
    };

    const moveCursor = (e) => {
      // If the mouse is over the chatbot icon or chatbot window, hide the custom cursor.
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

    const hideCursor = () => setVisible(false);
    const showCursor = () => setVisible(true);

    window.addEventListener("resize", updateSize);
    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", hideCursor);
    document.addEventListener("mouseenter", showCursor);

    updateSize();

    return () => {
      window.removeEventListener("resize", updateSize);
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", hideCursor);
      document.removeEventListener("mouseenter", showCursor);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  useEffect(() => {
    const handleMouseDown = () => {
      setIsClicking(true);
      setTimeout(() => setIsClicking(false), 80);
    };

    window.addEventListener("mousedown", handleMouseDown);
    return () => window.removeEventListener("mousedown", handleMouseDown);
  }, []);

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
        {/* Cursor Head Only */}
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
