import {ExternalLinkButton} from "./ExternalLinkButton.jsx";
import {useEffect, useRef} from "react";

export const ProjectCard = ({project}) => {
    if (!project) return null;
    if (!project['image_url'] || !project['title'] || !project['description']) return null;
    const linksContainerRef = useRef(null)

    useEffect(() => {
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
        <div className={`relative h-full w-full rounded-lg flex flex-col shadow-lg justify-start`}>
            <div className={`w-full rounded-t-lg`}>
                <img  className={`w-full h-52 object-cover rounded-t-lg`} src={project['image_url']} alt={`image of ${project.title}`}/>
                <div ref={linksContainerRef} className={`absolute h-52 top-0 w-full left-0 text-secondary-contrast rounded-t-lg grid place-items-center opacity-0 hover:opacity-100 bg-primary transition-all duration-300`}>
                    <div className={`relative h-full`}>
                        <img className={`w-full h-full object-cover rounded-t-lg invisible`} src={project['image_url']} alt=""/>
                        <div className={`w-full absolute top-1/2 -translate-y-1/2 left-0 py-4 `}>
                            <h1 className={`font-LilitaOne text-xl md:text-2xl text-plain opacity-90 mb-3 text-center`}>{project.title}</h1>
                            <div className={`flex justify-center`}><ExternalLinkButton link={project['live_site_link']}
                                                                                       text={'Live Site'}/>
                                <ExternalLinkButton link={project['github_repo_link']} text={'Github Repo'}/>
                                <ExternalLinkButton link={project['more_link']} text={'More'}/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className={`grid place-items-center grow py-4 px-2`}>
                <p className={`mx-1 text-primary text-center text-lg`}>{project['description']?? ''}</p>
                    {project['used_technologies'] && (
                        <div className={`inline-flex flex-wrap justify-center items-center`}>
                            {project['used_technologies'].map((badge) => (
                                    <a key={badge.name} target='_blank' href={badge.link} className={`w-fit mx-1 mt-2 transition-all duration-100 border-secondary border py-1 px-2 flex rounded-lg hover:cursor-pointer hover:bg-primary hover:border-plain group`}>
                                        {badge.icon && <img className={`w-4 h-4 mr-1`} src={badge.icon} alt={`icon of ${badge.name}`}/> }
                                    <p className={`text-secondary group-hover:text-plain font-LilitaOne text-xs`}>{badge.name}</p>
                                </a>
                            ))}
                        </div>
                    )}

            </div>

        </div>
    )
}
