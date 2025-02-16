import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Clients from './sections/Clients.jsx';
import Projects from './sections/Projects.jsx';
import WorkExperience from './sections/Experience.jsx';
import Tech from './components/Tech.jsx';
import Cursor from './sections/cursor.jsx'

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Cursor/>
      <Navbar />
      <Hero />
      <About />
      <Tech/>
      <Projects />
      <Clients />
      <WorkExperience />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
