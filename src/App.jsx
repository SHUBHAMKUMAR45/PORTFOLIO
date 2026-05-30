import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Projects from './sections/Projects.jsx';
import Experiences from './sections/Experience.jsx';
import AIAssistant from './components/AIAssistant.jsx';


const App = () => {
  return (
    <main className="relative mx-auto max-w-7xl min-h-screen px-4 bg-[#030308]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experiences />

      <Projects />
      <Contact />
      <AIAssistant />
      <Footer />
    </main>
  );
};

export default App;
