import React from 'react'

const Education = () => {
  return (
    <section id='education' className='py-20 h-custom-screen-md md:h-full'>
      <h1 className='text-center font-semibold text-3xl dark:text-white bottom'>My <span className='text-light-theme'>Education</span></h1>
      <div className='flex justify-between mt-20 sm:mt-8 md:flex-col'>
        <div className='p-4 rounded-md border border-gray-100 shadow-md mr-4 md:mr-0 box-border flex-1 dark:bg-slate-800 dark:border-0 bottom'>
          <h1 className='text-light-theme text-xl font-semibold mb-2'>Computer Engineering</h1>
          <p className='text-gray-500 mb-2 font-normal text-lg dark:text-gray-300 italic'>2021-2025</p>
          <p className='text-lg dark:text-white'>Pursuing a Bachelors degree in Computer Engineering at Mukesh Patel School of Technology and Management, Shirpur. I'm currently in 7th semester with CGPA of 3.31</p>
        </div>
        <div className='p-4 rounded-md border border-gray-100 shadow-md ml-4 md:ml-0 md:mt-8 box-border flex-1 dark:bg-slate-800 dark:border-0 bottom'>
          <h1 className='text-light-theme text-xl font-semibold mb-2'>HSC</h1>
          <p className='text-gray-500 mb-2 font-normal text-lg dark:text-gray-300 italic'>2020-2021</p>
          <p className='text-lg dark:text-white'>Completed HSC at R C Patel Junior College, Shirpur. I completed HSC with 90.0%</p>
        </div>
      </div>
    </section>
  )
}

export default Education
