export const Skills = ({skillsTitle, skillsContent, skillBadges}) => {
    if (!skillsTitle || !skillsContent || !skillBadges) return null;
    return (
        <section id={'skills'} role={'contentinfo'} aria-label={`information about ${skillsTitle}`}
                 className={`w-full px-14`}>
            <div className={`small-container mx-auto py-8`}>
                <h1 className={`text-4xl text-primary font-LilitaOne`}>{skillsTitle}</h1>
                <p className={`text-2xl text-secondary`}>{skillsContent}</p>
                <div className={`mt-4 grid place-items-center gap-3 grid-cols-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12`}>
                    {skillBadges.map((badge) =>
                        (
                            <a key={badge.name} href={badge.link} target={'_blank'} className={'grid place-items-center mx-2 group'}>
                                <img className={`w-10 h-10 mx-1 my-2 cursor-pointer`} key={badge.name} src={badge.icon}
                                     alt={`${badge.name} link icon`}/>
                                <p className={`text-center font-LilitaOne hover:cursor-pointer text-primary group-hover:text-secondary`}>{badge.name}</p>
                            </a>
                        )
                    )}
                </div>
            </div>
        </section>
    )
}
