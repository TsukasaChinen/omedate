import { splitDate } from "../../commons/utilities";

import { QuiriesTypes } from "../../commons/types";

type Props = QuiriesTypes & {
  className?: string;
};

export const ResultText: React.FC<Props> = ({ className, queries }) => {
  const birthday = queries.birthday && splitDate(queries.birthday);
  const birthdayStr =
    birthday &&
    `${birthday.year}年${Number(birthday.month)}月${Number(birthday.day)}日`;

  const genderStr = queries.gender === "male" ? "男の子" : "女の子";
  const genderClass = queries.gender === "male" ? "blue" : "red";

  return (
    <div className={className}>
      <p>
        <span className="green">「{birthdayStr}」</span>
        生まれの
        <span className={genderClass}>「{genderStr}」</span>
        のお祝い事の日付一覧です。
      </p>
    </div>
  );
};
