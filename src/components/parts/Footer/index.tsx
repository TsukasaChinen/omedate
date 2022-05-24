import { Copyright } from "../../elements/Copyright";
import { Spacer } from "../../elements/Spacer";
import style from "./footer.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={style.wrapper}>
      <Spacer height={{ s: 20, m: 80 }} />
      <Copyright text="copyright &copy; 2022 trylight.net" />
    </footer>
  );
};
