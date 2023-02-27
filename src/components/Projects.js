import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { projects } from "../data/projects"
import ProjectSingle from './ProjectSingle'


function Projects() {
    // custom hook which works really similarly like useState but it have some differences.
    // The first value is a state variable that get initialized using the custom hook
    // The second value works as a function to update the first value, 
    // which is equal to an empty array
    const [projectsRef, setProjectsRef] = useArrayRef();

    // function for making an array of refs
    function useArrayRef() {
        const projectsRef = useRef([]);
        projectsRef.current = [];
        // returns an array of two values:
        // The first is the state variable declared before
        // The second one is a function that takes an argument, in this case "ref". 
        // If "ref" is truthy (so if is not equal to null, undefiend, 0 or false),
        // it will push "ref" into the "projectsRef.current" and it will be possible just by 
        // referencing elements in the DOM wizth the "setProjectsRef" as a "ref"
        return [projectsRef, (ref) => ref && projectsRef.current.push(ref)];
    }

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        projectsRef.current.forEach((project) => {
            // select wrapper of each ref for the reveal animation
            const wrapper = project.querySelector('.project__single__image-wrapper');
            // select image of each ref for the image animation
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
            // the "<" sign means that this animation of the timeline will play 
            // as soon the animation get triggered
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