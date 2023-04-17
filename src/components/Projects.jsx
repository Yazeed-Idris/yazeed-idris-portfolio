import {ProjectCard} from "./ProjectCard.jsx";

export const Projects = ({projectsTitle, projectsContent, projects}) => {
    if (!projectsTitle || !projectsContent || !projects) return null;
    return (
        <section role={'contentinfo'} aria-label={`information about ${projectsTitle}`} className={`w-full px-14`}>
            <div className={`small-container mx-auto py-8`}>
                <h1 className={`text-4xl text-primary font-LilitaOne`}>{projectsTitle}</h1>
                <p className={`text-2xl text-secondary `}>{projectsContent}</p>
               <div className={`grid place-items-center grid-cols-1 lg:grid-cols-3 gap-3`}>
                     {projects.map((project) => (<ProjectCard key={project.title} project={project}/>))}
               </div>

            </div>
        </section>
    )
}
