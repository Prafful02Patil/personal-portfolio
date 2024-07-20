import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className='py-8'>
                <ul className='flex justify-center items-center *:mx-4 md:*:my-4 flex-wrap *:text-gray-900 *:text-lg dark:*:text-white'>
                    <li className='hover:underline duration-300 hover:underline-offset-4'><a href="#">Home</a></li>
                    <li className='hover:underline duration-300 hover:underline-offset-4'><a href="#about">About</a></li>
                    <li className='hover:underline duration-300 hover:underline-offset-4'><a href="#skills">Skills</a></li>
                    <li className='hover:underline duration-300 hover:underline-offset-4'><a href="#projects">Projects</a></li>
                    <li className='hover:underline duration-300 hover:underline-offset-4'><a href="#contact">Contact</a></li>
                </ul>
            </footer>
        </>
    )
}

export default Footer
