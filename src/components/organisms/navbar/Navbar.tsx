import { NavLink } from "react-router-dom";
import NavButton from "components/atoms/navButton";
import Logos from "components/atoms/logos";
import { useEffect, useState } from "react";

interface NavbarProps {
    page: string;
    toggleTheme: () => void;
}


const Navbar: React.FC<NavbarProps> = ({ page, toggleTheme }) => {
    const [pageName, setPageName] = useState<string>("");
    const [theme, setTheme] = useState<string>("light");

    const onToggleTheme = () => {
        toggleTheme();
        // change the icon of the moon with light and dark and system
        setTheme(theme === "light" ? "dark" : theme === "dark" ? "system" : "light");
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        }
        setPageName(page);
    }, [page]);

    return (
        <>
            <nav className="flex items-center justify-between py-10">
                <div className="flex items-center justify-between py-4">
                    <NavLink aria-label="Portfolio" to="/" className="font-black ">@damchap/ {pageName}</NavLink>
                </div>
                <div className="flex items-center justify-between  space-x-2">

                    <div className="hidden lg:block">
                        <NavLink aria-label="About" to="/about"
                            className="link-underline rounded-sm py-1 px-2 text-gray-900 hover:bg-gray-200 dark:hover:bg-blue-950 sm:py-2 sm:px-3 dark:text-white">about</NavLink>
                        <NavLink aria-label="Projects" to="/projects"
                            className="link-underline rounded-sm py-1 px-2 text-gray-900 hover:bg-gray-200 dark:hover:bg-blue-950 sm:py-2 sm:px-3 dark:text-white">projects</NavLink>
                        <NavLink aria-label="Contact" to="/contact"
                            className="link-underline rounded-sm py-1 px-2 text-gray-900 hover:bg-gray-200 dark:hover:bg-blue-950 sm:py-2 sm:px-3 dark:text-white">contact</NavLink>
                    </div>
                    <NavButton className="py-2"><Logos.Github
                        className="w-6 h-6 group-hover:animate-spin transition-all duration-200 ease-in-out text-default dark:text-white " /></NavButton>
                    <NavButton className="py-2" onClick={onToggleTheme} >
                        {theme === "light" ? <Logos.Moon className="w-6 h-6 group-hover transition-all duration-200 ease-in-out text-default dark:text-white" /> : theme === "dark" ? <Logos.Sun className="w-6 h-6 group-hover transition-all duration-200 ease-in-out text-default dark:text-white" /> : <Logos.Desktop className="w-6 h-6 group-hover transition-all duration-200 ease-in-out text-default dark:text-white" />}
                    </NavButton>
                    <NavButton className="py-2"><Logos.Menu
                        className="w-6 h-6 group-hover transition-all duration-200 ease-in-out text-default dark:text-white " />
                        <div className="fixed top-24 w-52 text-right">

                        </div>
                    </NavButton>
                    
                </div>

            </nav>
        </>
    );
};
export default Navbar;