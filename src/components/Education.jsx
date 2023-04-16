export const Education = ({educationTitle, educationContent}) => {
    if (!educationTitle || !educationContent) return null;
    return (
        <section role={'contentinfo'} aria-label={`information about ${educationTitle}`} className={`w-full px-14`}>
            <div className={`small-container mx-auto py-8`}>
                <h1 className={`text-4xl text-primary font-LilitaOne`}>{educationTitle}</h1>
                <p className={`text-2xl text-secondary `}>{educationContent}</p>
            </div>
        </section>
    )
}
