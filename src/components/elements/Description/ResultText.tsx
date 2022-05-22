import { useRecoilValue } from "recoil";

import { QuiriesTypes } from "../../commons/types";

import { birthdayState, genderState } from "../../commons/keys";

type Props = QuiriesTypes & {
  className?: string;
};

export const ResultText: React.FC<Props> = ({ className, queries }) => {
  const birthday = useRecoilValue(birthdayState).split("-");

  const birthdayStr =
    birthday &&
    `「${birthday[0]}年${Number(birthday[1])}月${Number(birthday[2])}日」`;

  const gender = useRecoilValue(genderState);

  const genderStr = gender === "male" ? "男の子" : "女の子";
  const genderClass = gender === "male" ? "blue" : "red";

  return (
    <div className={className}>
      <p>
        <span className="green">{birthdayStr}</span>
        生まれの
        <span className={genderClass}>「{genderStr}」</span>の
        お祝い事の一覧です。
      </p>
    </div>
  );
};
