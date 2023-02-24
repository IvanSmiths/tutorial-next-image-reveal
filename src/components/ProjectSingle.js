import Link from 'next/link'
import React from 'react'

function ProjectSingle({ project, setProjectsRef }) {

    return (
        <div ref={setProjectsRef} className={`${project.hasMargin === true ? "projects__single projects__single-margin" : "projects__single"} `}>
            <div className='project__single__image-wrapper'>
                <Link className='wrapper' href={project.link}>
                    <img className='project__single__image' src={project.image} alt={project.name} />
                </Link>
            </div>
            <div className='project__single__details'>
                <h2>{project.name}</h2>
                <Link href={project.link}>
                    Discover
                </Link>
            </div>
            <ul>
                {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                ))}
            </ul>
        </div>
    )
}

export default ProjectSingle