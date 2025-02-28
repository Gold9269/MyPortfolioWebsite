// LandingAnimation.jsx
import React from "react";
import { motion } from "framer-motion";

const landingVariants = {
  hidden: { opacity: 0, scale: 0.6, rotateX: 75, zIndex: -1 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 1, 0.5, 1], // Smooth spring curve
    },
  },
  exit: {
    opacity: 0,
    scale: 1.3,
    rotateX: -75,
    y: "-100vh",
    transition: {
      duration: 0.7,
      ease: [0.25, 1, 0.5, 1], // Smooth spring curve
    },
  },
};

const backgroundVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const glowEffect = {
  hidden: { opacity: 0, scale: 1.2 },
  visible: {
    opacity: 0.5,
    scale: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const LandingAnimation = ({ onAnimationComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-[#0A0A0A] z-50"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={landingVariants}
      onAnimationComplete={onAnimationComplete}
      style={{ transformOrigin: "center" }}
    >
      {/* Background Glow & Depth */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#1E1E1E] to-[#222222] opacity-50 blur-[6rem]"
        variants={backgroundVariants}
      ></motion.div>

      {/* Animated Pulsing Glow */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-[#333] opacity-20 blur-[100px]"
        variants={glowEffect}
      ></motion.div>

      {/* Main Content */}
      <motion.div className="relative flex flex-col items-center text-center">
        <motion.h1
          className="text-[#F5F5F5] text-[90px] font-extrabold uppercase leading-none tracking-wider"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.4 } }}
        >
          WELCOME
        </motion.h1>

        <motion.div
          className="h-2 w-36 bg-[#AAAAAA] my-5"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1, transition: { delay: 0.3, duration: 0.3 } }}
        />

        <motion.p
          className="text-[#D0D0D0] text-3xl font-semibold tracking-wide uppercase"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.4 } }}
        >
          Build. Create. Dominate.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default LandingAnimation;
