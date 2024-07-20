import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CodeIcon from '@mui/icons-material/Code';

const ProjectDetail = () => {
  const project = {
    image: "/images/projects/event.jpg",
    title: "College Event Hub",
    info: "A platform for college students to find and participate in events.",
    technologies: ["HTML", "CSS", "JavaScript", "React Js", "Node Js", "Express Js", "MySql", "Firebase", "API"],
    github: null,
    livePreview: null,
    startDate: "November 2023",
    endDate: "December 2023"
  };

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="md:flex">
        <div className="md:w-1/3">
          <img src={project.image} alt={project.title} className="rounded-lg w-full h-full object-cover" />
        </div>
        <div className="md:w-2/3 md:ml-6 mt-4 md:mt-0">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">{project.info}</p>
          <div className="flex items-center mt-4">
            <CalendarTodayIcon className="text-gray-600 dark:text-gray-300" />
            <span className="ml-2 text-gray-600 dark:text-gray-300">{project.startDate} - {project.endDate}</span>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Technologies Used:</h3>
            <ul className="flex flex-wrap mt-2">
              {project.technologies.map((tech, index) => (
                <li key={index} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full px-4 py-1 m-1">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 flex items-center">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 mr-4">
                <GitHubIcon />
              </a>
            )}
            {project.livePreview && (
              <a href={project.livePreview} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                <LaunchIcon />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
