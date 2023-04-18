export const Skills = ({skillsTitle, skillsContent, skillBadges}) => {
    if (!skillsTitle || !skillsContent || !skillBadges) return null;
    return (
        <section id={'skills'} role={'contentinfo'} aria-label={`information about ${skillsTitle}`} className={`w-full px-14`}>
            <div className={`small-container mx-auto py-8`}>
                <h1 className={`text-4xl text-primary font-LilitaOne`}>{skillsTitle}</h1>
                <p className={`text-2xl text-secondary`}>{skillsContent}</p>
                <div className={`flex flex-wrap justify-center items-center`}>
                    {/* todo: change styling*/}
                    {skillBadges.map((badge) => (<img className={`w-10 h-10 mx-1 my-2 cursor-pointer`} key={badge.name} src={badge.icon} alt={`${badge.name} link icon`}/>))}
                </div>
            </div>
        </section>
    )
}
