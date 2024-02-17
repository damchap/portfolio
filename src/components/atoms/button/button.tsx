import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
    children: React.ReactNode;
    outline?: boolean;
    className?: string;
    ref?: React.LegacyRef<HTMLButtonElement> | undefined;
}

const Button: React.FC<ButtonProps> = ({ children, className,outline, ref, ...rest }) => {
  return (
    <button
      ref={ref}
      className={
        className +
          (outline ?
              "w-full sm:w-auto flex-none bg-transparent hover:bg-primary text-primary hover:text-white border-primary border-2 text-lg leading-6 font-semibold py-3 px-6 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-primary focus:outline-none transition-colors duration-200" :
              "w-full sm:w-auto flex-none bg-primary hover:bg-primary-dark text-white text-lg leading-6 font-semibold py-4.5 px-7 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-primary focus:outline-none transition-colors duration-200")
        }
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
