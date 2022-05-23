import { Copyright } from "../../parts/Copyright";
import { Spacer } from "../../parts/Spacer";
import style from "./style.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={style.footer}>
      <Spacer height={{ s: 20, m: 80 }} />
      <Copyright text="copyright &copy; 2022 trylight.net" />
    </footer>
  );
};
