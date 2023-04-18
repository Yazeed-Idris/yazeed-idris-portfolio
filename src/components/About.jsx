export const About = ({fullName, title, subtitle, description, pictureUrl}) => {
    if (!fullName || !title || !subtitle || !description || !pictureUrl) return null;
    return <section id={'about'} role={'contentinfo'} aria-label={`information about ${fullName}`} className={`w-full bg-secondary px-14`}>
        <div className={`small-container mx-auto py-8 grid place-items-center text-center`}>
            <h1 className={`text-4xl text-plain opacity-90 font-LilitaOne`}>{title}</h1>
            {/*<h2 className={`text-3xl text-plain font-bold`}>{subtitle}</h2>*/}
            <img src={pictureUrl} className={`rounded-full w-56 h-56 my-6 shadow-xl border-2 border-plain`} alt={`picture of ${fullName}`}/>
            <p className={`text-2xl text-secondary-contrast font-normal text-center`}>{description}</p>
        </div>
    </section>
}
