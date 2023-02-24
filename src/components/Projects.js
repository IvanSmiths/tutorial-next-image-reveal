import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { projects } from "../data/projects"
import ProjectSingle from './ProjectSingle'


function Projects() {
    const [projectsRef, setProjectsRef] = useArrayRef();

    function useArrayRef() {
        const projectsRef = useRef([]);
        projectsRef.current = [];
        return [projectsRef, (ref) => ref && projectsRef.current.push(ref)];
    }

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        projectsRef.current.forEach((project) => {
            const wrapper = project.querySelector('.project__single__image-wrapper');
            const image = project.querySelector('.project__single__image');
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: project,
                    start: 'top bottom',
                    toggleActions: "restart none none reset"
                }
            })

            tl.to(wrapper, {
                ease: "power2",
                duration: 2,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            })
            tl.to(image, {
                duration: 2,
                scale: 1
            }, "<")
        });
    }, []);
    return (
        <main className='projects__outer'>
            {projects.map((project) => (
                <ProjectSingle setProjectsRef={setProjectsRef} key={project.name} project={project} />
            ))}
        </main>
    )
}

export default Projects