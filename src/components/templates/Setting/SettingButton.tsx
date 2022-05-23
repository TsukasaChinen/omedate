import { useSetRecoilState } from "recoil";

import { windowHistoryReplaceState } from "../../utilities";

import { resultState } from "../../inits/keys";
import { ReactComponent as IconBabyNomal } from "../../../assets/media/iconBabyNormal.svg";

type Props = {
  birthday: string;
  gender: string;
  className?: string;
};

export const SettingButton: React.FC<Props> = ({
  birthday,
  gender,
  className,
}) => {
  const setResult = useSetRecoilState(resultState);

  const handleClickIsResult = () => {
    setResult(true);
    windowHistoryReplaceState(birthday, gender);
  };

  return (
    <button
      type="button"
      className={`button ${className}`}
      onClick={handleClickIsResult}
    >
      <IconBabyNomal />
      お祝い事をみる
    </button>
  );
};
