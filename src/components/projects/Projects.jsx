import React from 'react'
import ProjectCard from './ProjectCard';
import data from "./data.js"

const Projects = () => {
    return (
        <>
            <section id="projects" className='py-16'>
                <h1 id='about' className='text-center font-semibold text-3xl pt-4 dark:text-white bottom'>My <span className='text-light-theme'>Projects</span></h1>
                <div className='mt-20 sm:mt-12 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 gap-y-12 lg:gap-x-8'>
                    {
                        data.map((item, index) => {
                            return (
                                <div key={index} className='flex justify-center items-center bottom'>
                                    <ProjectCard project={item}/>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Projects;
