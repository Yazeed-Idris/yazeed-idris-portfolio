export const ProjectCard = ({project}) => {
    return (
        <div className={`relative`}>
            <img className={`w-full h-full`} src={project['image_url']} alt={`image of ${project.title}`}/>
            <div className={`absolute w-full h-full top-0 left-0 grid place-items-center`}>

            <h1>{project.title}</h1>
            </div>
        </div>
    )
}
