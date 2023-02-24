import React from 'react'
import { projects } from "../data/projects"
import ProjectSingle from './ProjectSingle'


function Projects() {
    return (
        <main className='projects__outer'>
            {projects.map((project) => (
                <div key={project.name}>
                    <ProjectSingle project={project} />
                </div>
            ))}
        </main>
    )
}

export default Projects