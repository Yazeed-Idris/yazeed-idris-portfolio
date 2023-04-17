export const ExternalLinkButton = ({link, text}) => {
    if (!link || !text) return null;
    return (
        <a className={`mx-1 border rounded-xl py-2 px-4 hover:bg-secondary-contrast hover:text-primary transition-all duration-300`} target='_blank' href={link}>{text}</a>
    )
}
