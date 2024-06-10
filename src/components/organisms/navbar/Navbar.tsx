import {NavLink} from "react-router-dom";
import NavButton from "components/atoms/navButton";
import Logos from "components/atoms/logos";


const Navbar = () => {
    return (
        <>
            <nav className="flex items-center justify-between py-10">
                <div className="flex items-center justify-between py-4">
                    <NavLink aria-label="Portfolio" to="/" className="font-black ">@damchap/ </NavLink>
                </div>
                <div className="flex items-center justify-between  space-x-2">

                    <div className="hidden lg:block">
                        <NavLink aria-label="About" to="/about"
                              className="link-underline rounded-t py-1 px-2 text-gray-900 hover:bg-gray-200   sm:py-2 sm:px-3">about</NavLink>
                        <NavLink aria-label="Projects" to="/projects"
                              className="link-underline rounded-t py-1 px-2 text-gray-900 hover:bg-gray-200   sm:py-2 sm:px-3">projects</NavLink>
                        <NavLink aria-label="Contact" to="/contact"
                              className="link-underline rounded-t py-1 px-2 text-gray-900 hover:bg-gray-200   sm:py-2 sm:px-3">contact</NavLink>
                    </div>
                    <NavButton className="py-2"><Logos.Github
                        className="w-6 h-6 group-hover:animate-spin transition-all duration-200 ease-in-out "/></NavButton>
                    <NavButton className="py-2"><Logos.Desktop
                        className="w-6 h-6 group-hover:animate-spin transition-all duration-200 ease-in-out "/></NavButton>
                    <NavButton className="py-2"><Logos.Menu
                        className="w-6 h-6 group-hover transition-all duration-200 ease-in-out "/></NavButton>
                </div>

            </nav>
        </>
    );
};
export default Navbar;