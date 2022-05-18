import style from "./style.module.css";

export const Description: React.FC = () => {
  return (
    <div className={style.description}>
      <p>
        生年月日と性別を入力するとお子さまの
        <span className={style.red}>「誕生から成人まで」</span>の<br />
        お祝い事の日付を表示します。
      </p>
    </div>
  );
};
