import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Experience from "../components/Experience";
import Background from "../components/Background";
import Chatbot from "../components/Chatbot";
import VoiceAssistant from "../components/VoiceAssistant";


function Home({ darkMode, setDarkMode }) {
  return (
    <div className="dark:bg-slate-950 dark:text-white flex flex-col md:flex-row gap-10 z-10 relative max-[1024px]:block max-[1024px]:px-8">
      <div className="navbar-section flex-1 ">
          
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>

      <div className="right_content_section flex-5">
          <Hero />
          <About title= "Intro" subTitle="About" />
          <Experience title= "My Journey" subTitle="Experience" />
          <Projects title= "Things I've built" subTitle= "Projects" />
          <Skills title= "The toolkit" subTitle="Skills" />
          <Background title= "Education & languages" subTitle="Background" />
          <Contact title= "Let's build something remarkable." subTitle="Contact" />
          <Footer />
      </div>
      
      <div className="ai-chatbot-section flex-1">
         <VoiceAssistant />
      </div>

      <div className="ai-chatbot-section flex-1">
         <Chatbot />
      </div>
      
    </div>
  );
}

export default Home;