import Vite from "./vite";
import Github from "./github.tsx";
import Desktop from "components/atoms/logos/desktop.tsx";
import Menu from "components/atoms/logos/menu.tsx";
import Cpp from "components/atoms/logos/cpp.tsx";
import Arduino from "components/atoms/logos/arduino.tsx";
import RaspberryPi from "components/atoms/logos/raspberryPy.tsx";
import Php from "components/atoms/logos/php.tsx";
import Composer from "components/atoms/logos/composer.tsx";
import Pnpm from "components/atoms/logos/pnpm.tsx";
import Damchap from "components/atoms/logos/damchap.tsx";
import Dev from "components/atoms/logos/dev.tsx"
import LogoDev from "components/atoms/logos/logodev.tsx";
import Instagram from "components/atoms/logos/instagram.tsx";
import Twitter from "components/atoms/logos/twitter.tsx";
import Linkedin from "components/atoms/logos/linkedin.tsx";
import Moon from "components/atoms/logos/moon.tsx";
import Sun from "components/atoms/logos/sun.tsx";

export interface LogosProps {
    width?: number | string,
    height?: number | string,
    className?: string,
}

const Logos = {
  Vite,
  Github,
  Desktop,
  Menu,
  Cpp,
  Arduino,
  RaspberryPi,
  Php,
  Composer,
  Pnpm,
  Damchap,
  Dev,
  LogoDev,
  Instagram,
  Twitter,
  Linkedin,
  Moon,
  Sun
};

export default Logos;
