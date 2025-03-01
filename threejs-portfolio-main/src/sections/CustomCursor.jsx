import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const containerRef = useRef(null);
  const lastPositionRef = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const [isClicking, setIsClicking] = useState(false);
  const [visible, setVisible] = useState(true);
  const [size, setSize] = useState(window.innerWidth < 768 ? 24 : 32);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [modalOpen, setModalOpen] = useState(false);

  // Set initial cursor position to center
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transform = `translate(${lastPositionRef.current.x}px, ${lastPositionRef.current.y}px)`;
    }
  }, []);

  useEffect(() => {
    const updateSize = () => {
      const mobileCheck = window.innerWidth < 768;
      setSize(mobileCheck ? 24 : 32);
      setIsMobile(mobileCheck);
    };

    const moveCursor = (e) => {
      if (isMobile) return;
      // Always record the last known mouse position.
      lastPositionRef.current = { x: e.clientX, y: e.clientY };

      // If modal is open, we do not update the visible custom cursor.
      if (modalOpen) return;

      requestAnimationFrame(() => {
        if (containerRef.current) {
          containerRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        }
      });
    };

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

    // Observe body class changes for modal state
    const observer = new MutationObserver(checkModalStatus);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => {
      window.removeEventListener("resize", updateSize);
      document.removeEventListener("mousemove", moveCursor);
      observer.disconnect();
    };
  }, [isMobile, modalOpen]);

  // When modal closes, update the custom cursor position to the last known position.
  useEffect(() => {
    if (!modalOpen && containerRef.current) {
      containerRef.current.style.transform = `translate(${lastPositionRef.current.x}px, ${lastPositionRef.current.y}px)`;
    }
  }, [modalOpen]);

  useEffect(() => {
    const handleMouseDown = () => {
      setIsClicking(true);
      setTimeout(() => setIsClicking(false), 80);
    };

    window.addEventListener("mousedown", handleMouseDown);
    return () => window.removeEventListener("mousedown", handleMouseDown);
  }, []);

  if (isMobile || modalOpen) return null;

  return (
    <div
      ref={containerRef}
      className="fixed pointer-events-none"
      style={{
        top: 0,
        left: 0,
        zIndex: 99999,
        position: "fixed",
      }}
    >
      <motion.div
        animate={{
          scale: isClicking ? 0.95 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "tween", duration: 0.08 }}
        style={{
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
    </div>
  );
};

export default CustomCursor;
