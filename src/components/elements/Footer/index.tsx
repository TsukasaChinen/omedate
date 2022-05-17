import useMedia from "use-media";

import style from "./style.module.css";

import { Copyright } from "../../commons/atoms/Copyright";
import { Spacer } from "../../commons/atoms/Spacer";

export const Footer: React.FC = () => {
  const isWide = useMedia({ minWidth: "768px" });

  return (
    <footer className={style.footer}>
      <Spacer height={isWide ? 80 : 40} />
      <Copyright text="copyright &copy; 2022 trylight.net" />
    </footer>
  );
};
