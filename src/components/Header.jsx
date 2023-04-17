export const Header = ({fullName, socialBadges}) => {
    if (!fullName || !socialBadges) return null;
    return (
        <header className={`w-full px-6 bg-secondary-contrast`}>
            <div className={`container mx-auto flex justify-between items-center py-8`}>
                <h1 className={`text-3xl font-LilitaOne text-secondary`}>{fullName}</h1>
                <div className={`flex items-center`}>
                    {socialBadges.map((badge) => (<img className={`w-10 h-10 mx-1 cursor-pointer`} key={badge.name} src={badge.icon} alt={`${badge.name} link icon`}/>))}
                </div>
            </div>
        </header>
    )
}
