import { Logo } from "../../elements/Logo";
import style from "./header.module.css";

export const Header: React.FC = () => {
  return (
    <header className={style.wrapper}>
      <a href={process.env.REACT_APP_ROOT_DIR} className={style.link}>
        <Logo />
      </a>
    </header>
  );
};
