// App.jsx
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Footer from "./sections/Footer.jsx";
import Navbar from "./sections/Navbar.jsx";
import Contact from "./sections/Contact.jsx";
import Clients from "./sections/Clients.jsx";
import Projects from "./sections/Projects.jsx";
import WorkExperience from "./sections/Experience.jsx";
import Tech from "./components/Tech.jsx";
import CustomCursor from "./sections/CustomCursor.jsx";
import LandingAnimation from "./sections/LandingAnimation .jsx";

const App = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowAnimation(false), 2000); // Fades out after 2 sec
  }, []);

  return (
    <main className="max-w-7xl mx-auto relative">
      <AnimatePresence>
        {showAnimation && <LandingAnimation onAnimationComplete={() => setShowAnimation(false)} />}
      </AnimatePresence>

      {!showAnimation && (
        <>
          <CustomCursor />
          <Navbar />
          <Hero />
          <About />
          <Tech />
          <Projects />
          <Clients />
          <WorkExperience />
          <Contact />
          <Footer />
        </>
      )}
    </main>
  );
};

export default App;
