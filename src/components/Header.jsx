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
        <header className={`w-full px-6 bg-secondary-contrast relative`}>
            <div className={`container mx-auto flex justify-between items-center py-8 flex-wrap`}>
                <h1 className={`text-3xl font-LilitaOne text-secondary`}>{fullName}</h1>
                <div className={``}>
                    <button onClick={handleBurgerClick} className={`sm:hidden grid place-items-center border-2 border-secondary p-1 rounded-lg`}>
                        <FontAwesomeIcon className={`text-secondary w-6 h-6`} icon={faBars} />
                    </button>
                    <nav className={`z-50 absolute w-screen sm:w-fit left-0 top-full ${isNavOpen? 'scale-100' : 'scale-0'} sm:scale-100 origin-top sm:static h-0 sm:visible sm:h-fit transition duration-100 `}>
                        <ul  className={`flex flex-col justify-center items-center font-Oswald text-xl sm:flex-row bg-secondary-contrast text-secondary pb-4 sm:pb-0`}>
                            {navigationLinks.map((link) => {
                                return (
                                    <li onClick={handleMenuClicks} key={link.name} className={`mx-2 my-1`}><a href={link.link}>{link.name}</a></li>
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
