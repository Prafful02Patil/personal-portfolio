import React from 'react'
import NavigationOutlinedIcon from '@mui/icons-material/NavigationOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const Home = () => {
    return (
        <section id='home' className='h-custom-screen-lg md:h-custom-screen-md flex justify-between items-center'>
            <div className='*:my-4 flex flex-col'>
                <p className='text-xl font-medium text-gray-700 dark:text-white bottom'>Looking for a developer!</p>
                <h1 className='font-semibold text-5xl sm:text-4xl text-light-theme bottom'>Hi, I'm Narendra</h1>
                <p className='text-lg text-gray-700 w-10/12 md:w-full dark:text-white bottom'>A web developer with a passion for creating dynamic websites. I specialize in creating innovative digital solutions.</p>
                <div className='flex *:flex *:justify-center *:items-center *:px-3 *:py-1 *:bg-light-theme *:text-white *:rounded-md *:text-lg'>
                    <a className='mr-4 bottom' href="#contact">Hire Me <span className='rotate-90 ml-2
                    '><NavigationOutlinedIcon /></span> </a>
                    <a className='bottom' href="/resume/narendra_mali-resume.pdf" download={true}>Download CV <span className='ml-2'><FileDownloadOutlinedIcon /></span> </a>
                </div>

            </div>
            <div className='flex items-center justify-end w-full md:hidden'>
                <img src="/images/myphoto1.jpg" alt="Narendra Mali" className='rounded-full w-w25 lg:w-w22 top' />
            </div>
        </section>
    )
}

export default Home
