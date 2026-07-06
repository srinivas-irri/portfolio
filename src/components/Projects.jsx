import portfolioData from "../data/portfolioData";
import ('../assets/styles/projects.css');
import { CiGlobe } from "react-icons/ci";
import { TbExternalLink } from "react-icons/tb";
import { Link } from "react-scroll";

function Projects(props) {

  const { works } = portfolioData;

  return (
    <section id="projects" className="py-20 px-6 max-[640px]:px-0">
      
      <div className="mb-8 section_title">
        <div className="flex gap-2 items-center mb-6">
           <div className="title_bar"></div><div className="text-[#00eaff] uppercase text-sm sub_title">{props.subTitle}</div>
        </div>
         <h2 className="text-3xl text-4xl text-left text-white font-medium">{props.title}</h2>
      </div>

      <div className="grid grid-cols-2 gap-8 max-[1280px]:grid-cols-1">
        {works.map(
          (project, index) => (
            <div key={index} className="relative text-left border rounded-xl p-6 bg-[#081214] border-[rgba(255,255,255,0.2)] transition-all duration-700 hover:-translate-y-3 hover:transition-all hover:duration-700 project-section">
              <h3 className="text-1xl font-medium text-white ">{project.title}</h3>
              <div className="flex gap-2 items-center pt-2 projects_link">
                 <span className="text-[#00eaff] text-xs text-ellipsis overflow-hidden whitespace-nowrap">{project.live}</span>
                 <a href={project.live} target="_blank"><TbExternalLink className="text-white" /></a>
              </div>
              <p className="mt-3 text-gray-400 text-[16px] leading-6"> {project.description}</p>

              <div className="inline-block mt-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="bg-[#071b1d] border-[#034a52] inline-block mr-2 border-1 rounded-4xl py-1 px-3 mb-3 text-[#70e8f3] text-[13px]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default Projects;