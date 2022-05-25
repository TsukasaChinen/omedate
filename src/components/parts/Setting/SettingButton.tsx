import { useSetRecoilState } from "recoil";

import { windowHistoryReplaceState } from "../../utilities";

import { homeState } from "../../config/keys";
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
  const setHome = useSetRecoilState(homeState);

  const handleClickIsResult = () => {
    setHome(false);
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
