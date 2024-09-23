import { LogosProps } from "components/atoms/logos/index";

const Sun= (props: LogosProps): JSX.Element => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="32" cy="32" r="14" fill="#FFD700" />
      <g stroke="#FFD700" strokeWidth="2">
        <line x1="32" y1="2" x2="32" y2="12" />
        <line x1="32" y1="52" x2="32" y2="62" />
        <line x1="2" y1="32" x2="12" y2="32" />
        <line x1="52" y1="32" x2="62" y2="32" />
        <line x1="10.93" y1="10.93" x2="17.07" y2="17.07" />
        <line x1="46.93" y1="46.93" x2="53.07" y2="53.07" />
        <line x1="10.93" y1="53.07" x2="17.07" y2="46.93" />
        <line x1="46.93" y1="17.07" x2="53.07" y2="10.93" />
      </g>
    </svg>
  );
};

export default Sun;
