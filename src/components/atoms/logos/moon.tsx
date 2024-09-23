import { LogosProps } from "components/atoms/logos/index";

const Moon = (props: LogosProps): JSX.Element => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="24px"
            height="24px"
            {...props}
        >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.85.63-3.55 1.69-4.9C7.1 8.68 9.45 10 12 10c2.55 0 4.9-1.32 6.31-3.31C19.37 8.45 20 10.15 20 12c0 4.41-3.59 8-8 8z"/>
        </svg>
    );
};

export default Moon;
