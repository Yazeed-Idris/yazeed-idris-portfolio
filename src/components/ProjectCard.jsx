export const ProjectCard = ({project}) => {
    if (!project) return null;
    if (!project['image_url'] || !project['title'] || !project['description']) return null;
    return (
        <div className={`relative bg-secondary-contrast w-full h-full rounded-lg flex flex-col shadow-lg`}>
            <img className={`w-full object-cover rounded-t-lg`} src={project['image_url']} alt={`image of ${project.title}`}/>
            <div className={`absolute w-full h-full top-0 left-0 text-secondary-contrast rounded-lg grid place-items-center opacity-0 hover:opacity-100 bg-primary transition-all duration-300`}>
            <h1 className={`font-LilitaOne text-2xl`}>{project.title}</h1>
                {project['live_site_link'] ? <a target='_blank' href={project['live_site_link']}>Live Site</a> : null}
                {project['github_repo_link'] ? <a target='_blank' href={project['github_repo_link']}>GitHub Repo</a> : null}
                {project['more_link'] ? <a target='_blank' href={project['more_link']}>More</a> : null}
            </div>
            <div className={`grid place-items-center grow`}>
                <p className={`text-secondary w-full text-center text-lg`}>{project['description']?? ''}</p>
            {/*    todo: add technologies section */}
            </div>

        </div>
    )
}
