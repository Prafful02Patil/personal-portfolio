import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
  return (
    <>
      <section id="contact" className='h-96 flex flex-col justify-center items-center *:my-4 pt-4'>
        <p className='text-lg text-gray-700 dark:text-white bottom'>Get in touch</p>
        <h1 className='text-center font-semibold text-3xl dark:text-white bottom'>Contact <span className='text-light-theme'>Me</span></h1>
        <div className='flex justify-between md:block items-center border border-gray-500 rounded-lg p-4 bottom'>
          <a href="mailto:narendramali0001@gmail.com" target='_blank'>
            <p className='flex items-center mr-8 md:mr-0'><EmailIcon style={{ fontSize: "30px" }} className='text-white bg-blue-900 p-1 rounded-full' /><span className='text-lg ml-2 dark:text-white'>narendramali0001@gmail.com</span></p>
          </a>
          <a href="https://www.linkedin.com/in/narendra-mali-889323244" target='_blank'>
          <p className='flex items-center md:mt-4'><LinkedInIcon style={{ fontSize: "30px" }} className='text-white bg-blue-900 p-1 rounded-full' /><span className='text-lg ml-2 dark:text-white'>LinkedIn</span></p>
          </a>
        </div>
      </section>
    </>
  )
}

export default Contact
