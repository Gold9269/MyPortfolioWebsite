import React from "react";
import { motion } from "framer-motion";

const landingVariants = {
  hidden: { opacity: 0, scale: 0.5, rotateX: 75, zIndex: -1 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 1.3,
    rotateX: -75,
    y: "-100vh",
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};

const glowEffect = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [1, 0.6, 1],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};

const bounceEffect = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: [1.2, 0.9, 1],
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const hoverEffect = {
  hover: {
    rotate: 10,
    scale: 1.1,
    boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.6)",
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const textFlicker = {
  animate: {
    opacity: [0.8, 1, 0.8],
    transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
  },
};

const LandingAnimation = ({ onAnimationComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-[#0A0A0A] z-50"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={landingVariants}
      onAnimationComplete={onAnimationComplete}
      style={{ transformOrigin: "center" }}
    >
      {/* Background Glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-[#333] opacity-30 blur-[120px]"
        variants={glowEffect}
        animate="animate"
      ></motion.div>

      {/* Animated Logo with Neon Glow */}
      <motion.div
        className="relative flex items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={bounceEffect}
      >
        {/* Neon Ring */}
        <motion.div
          className="absolute w-48 h-48 md:w-56 md:h-56 border-[6px] border-[#ffffff44] rounded-full blur-md"
          variants={glowEffect}
          animate="animate"
        ></motion.div>

        {/* Logo Image */}
        <motion.img
          src="/assets/portfolio.png"
          alt="Portfolio Logo"
          className="w-32 md:w-40 lg:w-48 h-auto drop-shadow-lg"
          variants={hoverEffect}
          whileHover="hover"
        />
      </motion.div>

      {/* Title with Flicker Effect */}
      <motion.h1
        className="text-[#F5F5F5] text-[90px] font-extrabold uppercase leading-none tracking-wider mt-5"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
        variants={textFlicker}
        animate="animate"
      >
        MY PORTFOLIO
      </motion.h1>

      {/* Line Divider */}
      <motion.div
        className="h-2 w-36 bg-[#AAAAAA] my-5"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1, transition: { delay: 0.3, duration: 0.3 } }}
      />

      {/* Tagline */}
      <motion.p
        className="text-[#D0D0D0] text-3xl font-semibold tracking-wide uppercase"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
        variants={textFlicker}
        animate="animate"
      >
        Build. Create. Dominate.
      </motion.p>
    </motion.div>
  );
};

export default LandingAnimation;
