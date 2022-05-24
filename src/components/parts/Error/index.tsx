import { ReactComponent as IconBabyCry } from "../../../assets/media/iconBabyCry.svg";
import style from "./style.module.css";

export const Error: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <i className={style.icon}>
        <IconBabyCry />
      </i>
      <p className={style.text}>URLが間違ってるよ</p>
      <p className={style.link}>
        <a href={process.env.REACT_APP_ROOT_DIR}>TOPページへ</a>
      </p>
    </div>
  );
};
