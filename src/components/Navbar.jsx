import React, { useRef, useState, useEffect } from 'react';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const checkboxRef = useRef(false);

  const clearCheckBox = (link) => {
    checkboxRef.current.checked = false;
    // setActiveLink(link);
  };

  // function to change website theme
  const changeTheme = (value) => {
    setDarkMode(value);

    const htmlElement = document.documentElement;
    const bodyElement = document.body;

    if (value) {
      htmlElement.classList.add('dark');
      bodyElement.classList.add("bg-slate-900");
      htmlElement.classList.remove('light');
    } else {
      htmlElement.classList.add('light');
      bodyElement.classList.remove("bg-slate-900");
      htmlElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.getElementsByTagName('section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (scrollPosition >= section.offsetTop) {
          setActiveLink(`#${section.id}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="sticky top-0 flex justify-between items-center h-20 bg-white dark:bg-slate-900 sm:h-12 z-50">
      <h1 className='text-3xl font-bold dark:text-white'>Portfolio</h1>
      <div className='flex'>
        <label htmlFor='menu' className='hidden md:block'><MenuIcon className='dark:text-white text-black' /></label>
        <input ref={checkboxRef} type="checkbox" className='peer hidden' id="menu" />
        <ul className='peer-checked:flex md:hidden flex md:absolute md:left-0 md:top-20 sm:top-10 md:flex-col md:w-full bg-white dark:bg-slate-900 md:*:text-center md:*:my-4 *:text-xl *:mx-4 dark:*:text-white *:duration-300'>
          <li onClick={() => clearCheckBox("#home")}>
            <a href="#" className={activeLink === "#home" ? "text-light-theme" : null}>Home</a>
          </li>
          <li onClick={() => clearCheckBox("#about")}>
            <a href="#about" className={activeLink === "#about" ? "text-light-theme" : null}>About</a>
          </li>
          <li onClick={() => clearCheckBox("#skills")}>
            <a href="#skills" className={activeLink === "#skills" ? "text-light-theme" : null}>Skills</a>
          </li>
          <li onClick={() => clearCheckBox("#projects")}>
            <a href="#projects" className={activeLink === "#projects" ? "text-light-theme" : null}>Projects</a>
          </li>
          <li onClick={() => clearCheckBox("#contact")}>
            <a href="#contact" className={activeLink === "#contact" ? "text-light-theme" : null}>Contact</a>
          </li>
        </ul>
        <div className='flex items-center ml-8 md:ml-6 cursor-pointer'>
          {darkMode ?
            <LightModeOutlinedIcon className='dark:text-white text-black' onClick={() => changeTheme(false)} /> :
            <DarkModeOutlinedIcon className='dark:text-white text-black' onClick={() => changeTheme(true)} />
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
