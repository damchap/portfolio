import { forwardRef, ComponentProps } from "react";

const NavButton = forwardRef<
    HTMLButtonElement,
    Omit<ComponentProps<"button">, "className">
>(({ children, ...rest }, ref) => {
    return <button
        ref={ref}
        className="
            group
            w-full
            sm:w-auto
            flex-none
            hover:scale-105
            text-black
            text-lg
            leading-6
            font-semibold
            py-3 px-3
            border-2
            rounded-xl
            focus:ring-2
            focus:ring-offset-2
            focus:ring-offset-white
            focus:ring-gray-900
            focus:outline-none
            transition-colors
            duration-1000
        "
        {...rest}
    >
        {children}
    </button>
});

export default NavButton;