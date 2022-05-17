import style from "./style.module.css";
import { Button } from "../../commons/atoms/Button";
import { IconBaby } from "../../commons/atoms/IconBaby";
import { Spacer } from "../../commons/atoms/Spacer";

export const Buttons: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <Spacer height={40} />
      <Button text="お祝い事をみる" className={style.button}>
        <IconBaby className={style.icon} />
      </Button>
    </div>
  );
};
