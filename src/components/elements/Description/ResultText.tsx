import { useRecoilValue } from "recoil";

import style from "./style.module.css";

import { splitDate } from "../../commons/utilities";
import { queryState } from "../../commons/keys";

export const ResultText: React.FC = () => {
  const queries = useRecoilValue(queryState);

  const birthday = queries.birthday && splitDate(queries.birthday);
  const birthdayStr =
    birthday &&
    `${birthday.year}年${Number(birthday.month)}月${Number(birthday.day)}日`;

  const genderStr = queries.gender === "male" ? "男の子" : "女の子";
  const genderClass = queries.gender === "male" ? style.male : style.female;

  return (
    <div className={style.description}>
      <p>
        <span className={style.birthday}>「{birthdayStr}」</span>
        生まれの
        <span className={genderClass}>「{genderStr}」</span>
        のお祝い事の日付一覧です。
      </p>
    </div>
  );
};
