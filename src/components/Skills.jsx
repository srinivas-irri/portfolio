import portfolioData from "../data/portfolioData";

function Skills(props) {

  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 px-6 max-[640px]:px-0">

      <div className="mb-8 section_title">
        <div className="flex gap-2 items-center mb-6">
           <div className="title_bar"></div><div className="text-emerald-400 uppercase text-sm sub_title">{props.subTitle}</div>
        </div>
         <h2 className="text-3xl text-4xl text-left text-white font-medium">{props.title}</h2>
      </div>

      <div className="grid grid-row gap-5 text-left">
        {skills.map((skill, index) => (
          <div className="skills_section" key={index}>
              <h3 className="mb-4 text-gray-400 text-sm ">{skill.title}</h3>
              <ul className="flex items-center gap-2 max-[640px]:flex-wrap">
              {skill.tools.map((tools, index) => (      
                  <li key={index} className="border-1 rounded-md py-0.5 px-3 mb-3 text-gray-400 bg-gray-800 text-[13px] border-gray-700 transition-all translate-y-0 duration-500 hover:duration-500 hover:border-gray-500 hover:transition-all hover:duration-500 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(85,_173,_232,_0.50)]" >
                    {tools}
                  </li>
              ))}
              </ul>
          </div>
          )
        )}
      </div>
    </section>
  );
}

export default Skills;