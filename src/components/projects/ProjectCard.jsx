import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

const ProjectCard = ({ project }) => {
    return (
        <div className="group h-52 w-80 [perspective:1000px] cursor-pointer">
            <div className="relative h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* front side */}
                <div className="absolute inset-0">
                    <img className="h-full w-full rounded-xl shadow-xl" src={`${project.image}`} alt={`${project.title}`} />
                </div>
                {/* back side */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-white  px-12 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] dark:bg-slate-800">
                    <div className="flex min-h-full flex-col items-center justify-center">
                        <h1 className="text-xl font-semibold text-light-theme">{project.title}</h1>
                        <p className="text-base text-gray-700 text-center mt-2 dark:text-slate-400">{project.info}</p>

                        <p className="flex justify-center items-center w-full mt-2">
                            <a
                                className="text-blue mr-8 dark:text-white hover:text-blue-900 hover:underline-offset-4 hover:underline"
                                target={project.github === null ? null : `_blank`}
                                href={project.github === null ? "#projects" : `${project.github}`}><GitHubIcon />
                                <span className="ml-2">Github</span>

                            </a>
                            <a
                                className="text-blue dark:text-white hover:text-blue-900 hover:underline-offset-4 hover:underline"
                                target={project.live === null ? null : `_blank`}
                                href={project.live === null ? "#projects" : `${project.live}`}><LinkIcon />
                                <span className="ml-2">Live</span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ProjectCard;