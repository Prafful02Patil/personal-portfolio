import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {

  useEffect(() => {
    //left animation
    ScrollReveal().reveal('.left', {
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'bottom',
      reset: false, // whether to reset animation on scroll
    });

    // right animation
    ScrollReveal().reveal('.right', {
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'right',
      reset: false, // whether to reset animation on scroll
    });

    // top animation
    ScrollReveal().reveal('.top', {
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'top',
      reset: false, // whether to reset animation on scroll
    });

    // bottom animation
    ScrollReveal().reveal('.bottom', {
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'bottom',
      reset: false, // whether to reset animation on scroll
    });
  }, []);

  return (
    <>
      <div className='sm:w-full sm:px-4 sm:pt-4 w-10/12 mx-auto font-poppins'>
        <Navbar />
        <Home />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
