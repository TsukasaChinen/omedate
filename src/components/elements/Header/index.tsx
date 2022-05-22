import { Logo } from "../../commons/atoms/Logo";

import style from "./style.module.css";

export const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <a href={process.env.REACT_APP_ROOT_DIR} className={style.link}>
        <Logo />
      </a>
    </header>
  );
};
