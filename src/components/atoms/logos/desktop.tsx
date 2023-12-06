import { LogosProps } from "components/atoms/logos/index";

const Desktop = (props: LogosProps): JSX.Element => {
    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path fill="currentColor" d="M9.33333 24.5V22.1667H11.6667V19.8333H4.66666C4.02499 19.8333 3.47588 19.6051 3.01933 19.1485C2.562 18.6912 2.33333 18.1417 2.33333 17.5V5.83333C2.33333 5.19167 2.562 4.64217 3.01933 4.18483C3.47588 3.72828 4.02499 3.5 4.66666 3.5H23.3333C23.975 3.5 24.5245 3.72828 24.9818 4.18483C25.4384 4.64217 25.6667 5.19167 25.6667 5.83333V17.5C25.6667 18.1417 25.4384 18.6912 24.9818 19.1485C24.5245 19.6051 23.975 19.8333 23.3333 19.8333H16.3333V22.1667H18.6667V24.5H9.33333ZM4.66666 17.5H23.3333V5.83333H4.66666V17.5ZM4.66666 17.5V5.83333V17.5Z" />
        </svg>

)
}

export default Desktop;