export const Projects = ({projectsTitle, projectsContent, projects}) => {
    if (!projectsTitle || !projectsContent || !projects) return null;
    return (
        <section role={'contentinfo'} aria-label={`information about ${projectsTitle}`} className={`w-full px-14`}>
            <div className={`small-container mx-auto py-8`}>
                <h1 className={`text-4xl text-primary font-LilitaOne`}>{projectsTitle}</h1>
                <p className={`text-2xl text-secondary `}>{projectsContent}</p>
            </div>
        </section>
    )
}
