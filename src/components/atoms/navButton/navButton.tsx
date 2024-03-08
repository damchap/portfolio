import React, {ButtonHTMLAttributes} from "react";

interface NavButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    className?: string,
    ref?: React.LegacyRef<HTMLButtonElement> | undefined
}

const NavButton: React.FC<NavButtonProps> = ({ children, className, ref, ...rest }) => {
    return <button
        ref={ref}
        className={"group\n" +

            "            sm:w-auto\n" +
            "            flex-none\n" +
            "            hover:scale-105\n" +
            "            text-black\n" +
            "            text-lg\n" +
            "            leading-6\n" +
            "            font-semibold\n" +
            "            py-3 px-3\n" +
            "            border-2\n" +
            "            rounded-xl\n" +
            "            focus:ring-2\n" +
            "            focus:ring-offset-2\n" +
            "            focus:ring-offset-white\n" +
            "            focus:ring-gray-900\n" +
            "            focus:outline-none\n" +
            "            transition-colors\n" +
            "            duration-1000" + className
        }
        {...rest}
    >
        {children}
    </button>
};

export default NavButton;