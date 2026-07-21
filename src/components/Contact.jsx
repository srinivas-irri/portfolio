import ("../assets/styles/contact.css");
import { GoArrowUpRight } from "react-icons/go";
import { TbMailShare } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";

function Contact(props) {

  const words = props.title.split(" ");
const lastWord = words.pop();

  return (
    <section
      id="contact"
      className="py-40 px-6 max-[640px]:px-0 max-[640px]:py-20">

     <div className="mb-8 section_title">
        <div className="flex gap-2 items-center justify-center mb-6">
           <div className="title_bar"></div><div className="text-[#00eaff] uppercase text-sm sub_title">{props.subTitle}</div>
        </div>
         <h2 className="text-6xl text-center text-white font-medium leading-20 mb-8 max-[640px]:text-[35px] max-[640px]:leading-12">
          {words.join(" ")}{" "}
          <span className="last-word text-md block capitalize">{lastWord}</span>
          </h2>
      </div>
      
      <div className="w-xl m-auto contact-section max-[1280px]:w-full">
        <p className="text-gray-400 text-center text-[18px] leading-7 max-[640px]:text-[15px] ">Let's build your next web application with Angular or React. I create responsive, scalable, and high-performance 
          user interfaces using modern frontend technologies, while leveraging AI-powered tools like ChatGPT, Gemini AI, Windsurf, and GitHub Copilot to accelerate development, 
          improve code quality, streamline debugging, and deliver production-ready applications faster.</p>
        <ul className="flex gap-3 justify-center pt-10">
          <li className="transitionall duration-400 hover:-translate-y-2"><a href="" className="flex gap-2 items-center text-[#01eaf1] text-sm bg-[#041b1e] border-1 border-[#04454c] rounded-sm font-sm py-2 px-3 -transitionall duration-400"><TbMailShare /> srinuvas.irri@gmail.com</a></li>
          <li className="transitionall duration-400 hover:-translate-y-2"><a href="https://www.linkedin.com/in/srinivas-irri-36824337/" target="_blank" className="flex gap-2 items-center text-[#01eaf1] text-sm border-1 border-[#04454c] rounded-md bg-[#041b1e] font-sm py-2 px-3 -transitionall duration-400"><FaLinkedinIn /> LinkedIn <GoArrowUpRight /></a></li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;