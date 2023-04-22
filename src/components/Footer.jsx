export const Footer = ({fullName, socialBadges, socialTitle}) => {
    if (!fullName || !socialBadges || !socialTitle) return null;
    return (
        <footer id={`contact`} className={`w-full px-6 bg-primary`}>
            <div className={`container mx-auto flex justify-between items-center py-6 flex-wrap`}>
                <h1 className={`text-4xl font-LilitaOne text-center  grow text-primary-contrast`}>{socialTitle}</h1>
                <div className={`flex justify-center items-center grow`}>
                    {socialBadges.map(badge => {
                        return <a key={badge.name} target={'_blank'} href={badge.link} className={`mx-2 group flex flex-col justify-between items-center`}>
                            <img className={`w-10 h-10 cursor-pointer`} key={badge.name} src={badge.icon} alt={`${badge.name} link icon`}/>
                            <p className={`text-center font-LilitaOne text-white mt-1 group-hover:text-primary-contrast`}>{badge.name}</p>
                        </a>
                    })}
                </div>
            </div>
        </footer>
    )
}
