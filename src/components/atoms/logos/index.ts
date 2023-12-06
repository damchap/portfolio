import Vite from "./vite";
import Github from "./github.tsx";
import Desktop from "components/atoms/logos/desktop.tsx";
import Menu from "components/atoms/logos/menu.tsx";

export interface LogosProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

const Logos = {
  Vite,
  Github,
  Desktop,
  Menu
};

export default Logos;
