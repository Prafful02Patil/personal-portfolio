import React from 'react'

const About = () => {
  return (
    <>
      <section id='about' className='md:block py-20'>
        <h1 className='text-center font-semibold text-3xl pb-20 md:pb-6 dark:text-white bottom'>About <span className='text-light-theme'>Me</span></h1>
        <div className='flex justify-between items-center md:block'>
          <div className='flex items-center justify-start md:justify-center md:mt-8 w-full md:mb-12'>
            <img src="/images/myphoto2.jpg" alt="Prafful Patil" className='rounded-full w-w25 md:w-72 lg:w-w22 bottom' />
          </div>
          <div className='lg:*:my-2 md:*:my-6 *:my-4 flex flex-col items-end md:inline'>
            <h1 className='text-3xl font-bold text-light-theme bottom'>Prafful Patil</h1>
            <p className='text-lg text-right md:text-left dark:text-white bottom'>I'm a Passionate <span className=' text-light-theme font-semibold bottom'>Web Developer</span></p>
            <p className='text-lg text-right md:text-left text-gray-500 w-10/12 md:w-full dark:text-white bottom'>I am a web developer with a strong background in both front-end and back-end technologies. I enjoy myself transforming complex problems into simple and intuitive solutions.</p>
            <a className='flex justify-center items-center px-3 py-1 bg-light-theme text-white rounded-md text-lg md:inline bottom' href="#education">Read More</a>
          </div>
        </div>
      </section>
    </>

  )
}

export default About
