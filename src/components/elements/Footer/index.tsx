import style from "./style.module.css";

import { Copyright } from "../../commons/atoms/Copyright";
import { Spacer } from "../../commons/atoms/Spacer";

export const Footer: React.FC = () => {
  return (
    <footer className={style.footer}>
      <Spacer height={{ s: 20, m: 80 }} />
      <Copyright text="copyright &copy; 2022 trylight.net" />
    </footer>
  );
};
