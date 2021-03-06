import { useRecoilValue } from "recoil";

import { birthdayState, genderState, loadingState } from "../../config/keys";

export const ResultText: React.FC<{ className?: string }> = ({ className }) => {
  const isLoading = useRecoilValue(loadingState);
  const birthday = useRecoilValue(birthdayState);
  const birthdayDate = birthday && birthday.split("-");
  const gender = useRecoilValue(genderState);

  return (
    <div className={className}>
      {isLoading ? (
        <p className="alignCenter">
          <span className="gray">・・・</span>
        </p>
      ) : (
        <p>
          <span className="green">
            {birthdayDate &&
              `「${birthdayDate[0]}年${Number(birthdayDate[1])}月${Number(
                birthdayDate[2]
              )}日」`}
          </span>
          生まれの
          <span className={gender === "male" ? "blue" : "red"}>
            「{gender === "male" ? "男の子" : "女の子"}」
          </span>
          の お祝い事の一覧です。
        </p>
      )}
    </div>
  );
};
