import portfolioData from "../data/portfolioData";
import ("../assets/styles/about.css");
import { FaRegFilePdf } from "react-icons/fa";

function About(props) {

  const { about } = portfolioData;

  return (
    <section id="about" className="py-20 px-6 max-[640px]:px-0">
      <div className="mb-6 section_title">
        <div className="flex gap-2 items-center mb-6">
           <div className="title_bar"></div><div className="text-[#01eaf1] uppercase text-sm sub_title">{props.subTitle}</div>
        </div>
         <h2 className="text-3xl text-4xl text-left text-white font-medium">{props.title}</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-12 about-section max-[1280px]:block">
        <div className="flex-8 text-white leading-7 text-left">
         {about.description.map((para, index) => (
            <p className="mb-6 text-[#8ea0b8] text-[16px]" key={index} dangerouslySetInnerHTML={{ __html: para }} />
          ))}

          <div className="flex items-center gap-3 sv-actions">
                <a href={about.resumeLink} target="_blank" rel="noopener noreferrer"
                className="px-4 py-2 flex gap-2 items-center border border-[#04454c] rounded-4xl text-[#01eaf1] cursor-pointer text-[14px] translate-y-[0] transition-all duration-500 bg-[#041b1e] hover:translate-y-[-6px] hover:transition-all hover:duration-[500] hover:shadow-[0_18px_30px_rgba(1,_234,_241,_0.22)] hover:transition-all hover:duration-500 resume-link"><FaRegFilePdf /> Download Resume</a>
          </div>
        </div>

        <div className="flex-4 bg-gray-800 border-1 border-mist-600 rounded-md py-5 px-5 max-[1280px]:mt-8 my_information">
            <ul>
               {about.cards.map((card, index) => (
                <li key={index} className="flex justify-between py-4 gap-10 border-b border-gray-700 max-[1440px]:block max-[1280px]:flex first:pt-0 last:pb-0 last:border-0">
                  <div className="text-gray-400 text-[15px] text-left">
                    {card.title}
                  </div>

                  <div className={`text-white text-[15px] text-right max-[1440px]:text-left max-[1440px]:mt-2 max-[1280px]:mt-0 max-[640px]:text-right ${card.description === 'Available' ? 'available' : ''} `}>
                    {card.description}
                  </div>
                </li>
              ))}
            </ul>
        </div>
      </div>

      
    </section>
  );
}

export default About;