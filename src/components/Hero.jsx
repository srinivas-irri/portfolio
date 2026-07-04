import portfolioData from "../data/portfolioData";
import Typewriter from "./Typewriter";
import "../assets/styles/hero.css";
import { Link } from "react-scroll";

function Hero() {
  const { personalInfo } = portfolioData;
  const navigateTo = [,
        { name: "Projects", to: "projects" },
        { name: "Contact", to: "contact" },
  ]

  return (
    <section
      className="
      flex
      flex-col
      justify-center
      items-center
      text-left
      py-50
      max-[1024px]:py-30"

      id="hero"
    >

    <div className="flex flex-col gap-4 user_info_section">
      <div className="max-w-xl text-white flex gap-3 items-center before:[''] before:block before:w-[28px] before:h-[2px] before:bg-[linear-gradient(120deg,_var(--accent)_10%,_#7dd3fc_55%,_var(--accent-secondary)_100%)] before:flex-shrink-[0] before:rounded-[2px] sub-title">
        <p className="text-['JetBrains Mono',monospace] items-center gap-[0.65rem] text-[#55ade8] letter-spacing-[0.1em] text-[0.8rem] font-[500] flex">{personalInfo.subtitle}</p>
      </div>
      <div className="max-w-xl text-white main-title">
         <h1 className="text-5xl font-bold text-[var(--secondary-font)] text-[80px] bg-[linear-gradient(120deg,_var(--accent)_10%,_#7dd3fc_20%,_var(--accent-secondary)_100%)] m-[0] max-[640px]:text-[52px]">{personalInfo.name}</h1>
      </div>
      <div className="max-w-xl text-white flex items-center gap-3 desgn-info">
          &#60; <Typewriter /> /&#62;
      </div>
      <div className="text-gray pb-4 pt-4 leading-7 w-10/12 description max-[768px]:w-12/12">
         <p className="text-[16px] text-[#8ea0b8] font-light max-[1024px]:text-[14px]">{personalInfo.description}</p>
      </div>
 
     <div className="flex items-center gap-3 sv-actions">
      {/* <a href={personalInfo.resumeLink} target="_blank" rel="noopener noreferrer"
      className="px-4 py-2 border border-mist-500 rounded-4xl text-white bg-olive-950 resume-link">Download Resume</a> */}

      <Link to="contact" smooth={true} duration={500}
        className="px-4 py-2 border border-mist-500 rounded-4xl text-white cursor-pointer bg-olive-950 text-[14px] translate-y-[0] transition-all duration-500 hover:translate-y-[-6px] hover:transition-all hover:duration-[500] hover:shadow-[0_18px_30px_rgba(85,_173,_232,_0.22)] hover:transition-all hover:duration-500 resume-link">Let's Connect
      </Link>
      <Link to="projects" smooth={true} duration={500}
        className="px-4 py-2 border border-mist-500 rounded-4xl text-black cursor-pointer bg-olive-950 text-[14px] bg-[linear-gradient(135deg,_var(--accent-primary)_0%,_var(--accent-secondary)_100%)] translate-y-[0] transition-all duration-500 hover:translate-y-[-6px] hover:transition-all hover:duration-500 hover:shadow-[0_18px_30px_rgba(85,_173,_232,_0.22)] hover:transition-all hover:duration-500 view-work">View Work
      </Link>
      </div>
    </div>
    </section>
  );
}

export default Hero;