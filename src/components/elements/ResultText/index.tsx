import style from "./style.module.css";

type Props = {
  gender: string;
  year: number;
  month: number;
  day: number;
};

export const ResultText: React.FC<Props> = ({ gender, year, month, day }) => (
  <div className={style.description}>
    <p>
      <span className={style.birthday}>
        「{year}年{month}月{day}日」
      </span>
      生まれの
      <span className={gender === "male" ? style.male : style.female}>
        「{gender === "male" ? "男の子" : "女の子"}」
      </span>
      のお祝い事の日付一覧です。
    </p>
  </div>
);
