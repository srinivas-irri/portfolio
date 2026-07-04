import React from 'react';
import portfolioData from "../data/portfolioData";

export default function Background(props) {
  
    const { education } = portfolioData;
    const { languages } = portfolioData;

    return (
    <div>
       <section className='py-20 px-6 max-[640px]:px-0' id='background'>
        
          <div className="mb-8 section_title">
            <div className="flex gap-2 items-center mb-6">
               <div className="title_bar"></div><div className="text-emerald-400 uppercase text-sm sub_title">{props.subTitle}</div>
            </div>
               <h2 className="text-3xl text-4xl text-left text-white font-medium">{props.title}</h2>
          </div>

               {/* <div className='flex flex-cols-2 gap-6 mb-4'>
                  <div className='flex-1'><h3 className='text-gray-400 text-md text-left'>Education</h3></div>
                  <div className='flex-1'><h3 className='text-gray-400 text-md text-left'>Languages</h3></div>
               </div> */}

               <div className='flex flex-cols-2'>
                  <div className='flex flex-7 flex-cols-2 gap-8 relative max-[1280px]:block'>
                  <div className='flex-1' >
                     <div className='flex-1'><h3 className='text-gray-400 text-md mb-4 text-left'>Education</h3></div>
                     {education.map((educate, index) => (
                     <div className='text-left pl-10 pb-6 relative before:w-3 before:h-3 before:z-9 before:bg-[#55ade8] before:absolute before:left-[3px] before:top-1.5 after:w-0.5 after:h-full after:bg-gray-700 after:absolute after:left-[9px] after:top-2 last:after:h-0 main-education-container' key={index}>
                        <div className='text-white font-medium text-md mb-1'>{educate.course}</div>
                        <div className='text-gray-400 text-sm'>{educate.collage}</div>
                     </div>
                  ))}
                  </div>
                  
                  <div className='flex-1'>
                  <div className='language_section'>
                     <div className='flex-1'><h3 className='text-gray-400 text-md mb-4 text-left'>Languages</h3></div>
                     <ul>
                     {languages.map((langs, index) => (
                       <li key={index} className='flex gap-3 items-center content-between text-sm pb-6 text-white '>
                         <div className='w-15 text-left'>{langs.lang}</div>
                         <div className='w-20 text-gray-400 text-sm'>{langs.value}</div>
                         <div className='flex gap-2 items-center rating'>
                           <span className='w-2 h-2 rounded-full bg-[#55ade8]'></span>
                           <span className='w-2 h-2 rounded-full bg-[#55ade8]'></span>
                           <span className='w-2 h-2 rounded-full bg-[#55ade8]'></span>
                           <span className='w-2 h-2 rounded-full bg-[#55ade8]'></span>
                           <span className='w-2 h-2 rounded-full bg-[#55ade8]'></span>
                         </div>
                        </li>
                     ))}
                     </ul>
                  </div>
                  </div>
                  
                  </div>
               </div>

       </section>
    </div>
  )
}
