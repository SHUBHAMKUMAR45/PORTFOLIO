import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Projects from './sections/Projects.jsx';
import Experiences from './sections/Experience.jsx';

const App = () => {
  return (
    <main className="relative mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
