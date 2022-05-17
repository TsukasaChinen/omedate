import { Logo } from "../../commons/atoms/Logo";

import style from "./style.module.css";

export const Header: React.FC = () => (
  <header className={style.header}>
    <a href="/" className={style.link}>
      <Logo />
    </a>
  </header>
);
