import {ExternalLinkButton} from "./ExternalLinkButton.jsx";
import {useEffect, useRef} from "react";

export const ProjectCard = ({project}) => {
    if (!project) return null;
    if (!project['image_url'] || !project['title'] || !project['description']) return null;
    const linksContainerRef = useRef(null)

    useEffect(() => {
        console.log('rerendered')
        const animationInterval = setInterval(() => {
            if (!linksContainerRef.current) return;
            if (linksContainerRef.current.classList.contains('opacity-0')) {
                linksContainerRef.current.classList.remove('opacity-0')
                linksContainerRef.current.classList.add('opacity-100')
            } else if (linksContainerRef.current.classList.contains('opacity-100')) {
                linksContainerRef.current.classList.remove('opacity-100')
                linksContainerRef.current.classList.add('opacity-0')
            }
        }, 5000);
        return () => clearInterval(animationInterval)
    } , [])

    return (
        <div className={`relative w-full h-full rounded-lg flex flex-col shadow-lg`}>
            <img  className={`w-full object-cover rounded-t-lg`} src={project['image_url']} alt={`image of ${project.title}`}/>
            <div ref={linksContainerRef} className={`absolute top-0 left-0 text-secondary-contrast rounded-t-lg grid place-items-center opacity-0 hover:opacity-100 bg-primary transition-all duration-300`}>
                <img className={`w-full object-cover rounded-t-lg invisible`} src={project['image_url']} alt=""/>
                <div className={`w-full absolute`}>
                    <h1 className={`font-LilitaOne text-2xl text-white opacity-90 mb-3 text-center`}>{project.title}</h1>
                    <div className={`flex justify-center`}><ExternalLinkButton link={project['live_site_link']} text={'Live Site'}/>
                        <ExternalLinkButton link={project['github_repo_link']} text={'Github Repo'}/>
                        <ExternalLinkButton link={project['more_link']} text={'More'}/></div>
                </div>

            </div>
            <div className={`grid place-items-center grow py-4 px-2`}>
                <p className={`mx-1 text-primary text-center text-lg`}>{project['description']?? ''}</p>
            {/*    todo: add technologies section */}
                    {project['used_technologies'] && (
                        <div className={`inline-flex flex-wrap justify-center items-center`}>
                            {project['used_technologies'].map((badge) => (
                                    <a target='_blank' href={badge.link} className={`w-fit mx-1 mt-2 transition-all duration-100 border-secondary border py-1 px-2 flex rounded-lg hover:cursor-pointer hover:bg-primary hover:border-white group`}>
                                    <img className={`w-4 h-4 mr-1`} src={badge.icon} alt={`icon of ${badge.name}`}/>
                                    <p className={`text-secondary group-hover:text-white font-LilitaOne text-xs`}>{badge.name}</p>
                                </a>
                            ))}
                        </div>
                    )}

            </div>

        </div>
    )
}
