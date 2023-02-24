import Link from 'next/link'
import React from 'react'

function ProjectSingle({ project }) {

    return (
        <div>
            <img src={project.image} alt={project.name} />
            <div>
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