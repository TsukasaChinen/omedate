import { ReactComponent as IconBabyCry } from "../../../assets/media/iconBabyCry.svg";
import style from "./style.module.css";

export const Error: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <i className={style.icon}>
        <IconBabyCry />
      </i>
      <p className={style.text}>URLが間違ってるよ</p>
    </div>
  );
};
