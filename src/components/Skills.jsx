import React from 'react'

const data = [
  {
    'name': 'html',
    'src': "/images/skills/html.png"
  },
  {
    'name': 'css',
    'src': "/images/skills/css.png"
  },
  {
    'name': 'javascript',
    'src': "/images/skills/javascript.png"
  },
  {
    'name': 'react js',
    'src': "/images/skills/react.png"
  },
  {
    'name': 'node js',
    'src': "/images/skills/node-js.png"
  },
  {
    'name': 'express js',
    'src': "/images/skills/express.png"
  },
  {
    'name': 'mysql',
    'src': "/images/skills/mysql.png"
  },
  {
    'name': 'mongodb',
    'src': "/images/skills/mongodb.png"
  },
  {
    'name': 'java',
    'src': "/images/skills/java.png"
  },
  {
    'name': 'python',
    'src': "/images/skills/python.png"
  },
  {
    'name': 'figma',
    'src': "/images/skills/figma.png"
  }
]

const Skills = () => {
  return (
    <>
      <section id="skills" className='py-20'>
        <h1 className='text-center font-semibold text-3xl dark:text-white bottom'>My <span className='text-light-theme'>Skills</span></h1>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 grid-cols-4 mt-20 sm:mt-12 gap-y-14'>
          {
            data.map((icon, index) => {
              return (
                <div key={index} className='flex justify-center items-center bottom'>
                  <img className='size-28 md:size-20 sm:size-18' key={index} src={`${icon.src}`} alt={`${icon.name}`} />
                </div>
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Skills
