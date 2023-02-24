import React from 'react'
import { projects } from "../data/projects"
import ProjectSingle from './ProjectSingle'


function Projects() {
    return (
        <main className='projects__outer'>
            {projects.map((project) => (
                <ProjectSingle key={project.name} project={project} />
            ))}
        </main>
    )
}

export default Projects