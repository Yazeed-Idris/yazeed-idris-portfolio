import { useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

export const Header = ({fullName, navigationLinks}) => {
    if (!fullName || !navigationLinks) return null;
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [wasClickedByButton, setWasClickedByButton] = useState(false);

    function handleBurgerClick() {
        setWasClickedByButton(true);
        setIsNavOpen(!isNavOpen);
    }

    function handleMenuClicks() {
        if (wasClickedByButton) {
            setIsNavOpen(!isNavOpen);
        }
    }

    return (
        <header className={`w-full px-6 bg-secondary-contrast sticky top-0 left-0 z-50`}>
            <div className={`container mx-auto flex justify-between items-center py-8 flex-wrap`}>
                <a href={'/'}><h1 className={`text-4xl font-LilitaOne text-secondary`}>{fullName}</h1></a>
                <div className={``}>
                    <button onClick={handleBurgerClick} className={`md:hidden grid place-items-center border-2 border-secondary p-1 rounded-lg`}>
                        <FontAwesomeIcon className={`text-secondary w-6 h-6`} icon={faBars} />
                    </button>
                    <nav className={`absolute w-screen md:w-fit left-0 top-full ${isNavOpen? 'scale-100' : 'scale-0'} md:scale-100 origin-top md:static h-0 md:visible md:h-fit transition duration-100 `}>
                        <ul  className={`flex flex-col justify-center items-center font-Oswald text-2xl md:flex-row bg-secondary-contrast text-secondary pb-4 md:pb-0`}>
                            {navigationLinks.map((link) => {
                                return (
                                    <li onClick={handleMenuClicks} key={link.name} className={`mx-2 my-1 hover:text-primary`}><a href={link.link}>{link.name}</a></li>
                                )
                            })}
                        </ul>
                    </nav>
                    {/*{socialBadges.map((badge) => (<img className={`w-10 h-10 mx-1 cursor-pointer`} key={badge.name} src={badge.icon} alt={`${badge.name} link icon`}/>))}*/}
                </div>
            </div>
        </header>
    )
}
