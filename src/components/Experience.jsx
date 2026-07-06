import React from 'react';
import portfolioData from "../data/portfolioData";

export default function Experience(props) {
    const { experience } =  portfolioData;

    // console.log(experience);
  return (
    <div>
      <section className='py-20 px-6 max-[640px]:px-0' id="experience">
       
       <div className="mb-6 section_title">
        <div className="flex gap-2 items-center mb-6">
           <div className="title_bar"></div><div className="text-[#00eaff] uppercase text-sm sub_title">{props.subTitle}</div>
        </div>
         <h2 className="text-3xl text-4xl text-left text-white font-medium">{props.title}</h2>
      </div>

      <div className='flex gap-2 experience-section max-[640px]:gap-3'>
          <div className='w-12 relative max-[640px]:w-5'>
            {/* <span className='bg-gray-700 route-bar'></span> */}
          </div>
          
          <div className='w-11/12'>
           {experience.map((job, index) => (
                 <div className={`exp-section mb-12 relative after:w-0.5 after:h-12/12 after:bg-[#04454c] after:content after:absolute after:top-8 after:-left-8 before:w-0.5 before:h-2/12 before:bg-gray-700 before:content before:absolute before:-top-5 before:-left-8 max-[640px]:after:-left-7 max-[640px]:before:-left-7 max-[640px]:last:before:h-1/12 ${job.serialNo === '1' ? 'before:hidden' : ''} ${job.serialNo === '4' ? 'after:hidden' : ''}`} key={index}>
                <div className={`mb-3 text-left relative before:content before:w-4 before:h-4 before:border-1 before:border-[#00eaff] before:bg-gray-950 before:rounded-lg before:absolute before:top-6/12 before:-translate-y-6/12 before:-left-10 before:z-20 job-info max-[640px]:before:-left-9  ${job.serialNo === '1' ? 'before:bg-[#00eaff]!' : ''}`}>
                    <div className='text-sm mb-1 text-[#00eaff] duration'>{job.year.from} - {job.year.to}</div>
                    <div className="text-white text-xl mb-1 font-medium position">{job.title}</div>
                    <div className="text-sm text-gray-400 company_info">{job.organization} · <span className='text-emerald-400'>{job.location}</span></div>
                </div>
                <div className='text-gray-400 text-[16px] text-left leading-7 job-description'>
                    <ul className='pl-4'>
                      {job.description.map((desp, index) => (
                          <li key={index} className='py-1 list-disc'>{desp}</li>
                      ))}
                    </ul>
                </div>  
                <div className='mt-4 core_skills'>
                    <ul className='text-gray-400 text-xs text-left'>
                      {job.technologies.map((tech, index) => (
                          <li key={index} className='inline-block mr-3 border-1 rounded-4xl py-2 px-3 mb-3 text-[#70e8f3] bg-[#071b1d] border-[#034a52]'>{tech}</li> 
                      ))}
                    </ul>
                </div>
              </div>
           ))}
          </div>
      </div>
      </section>
    </div>
  )
}
