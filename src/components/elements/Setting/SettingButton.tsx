import { replaceDateHyphen } from "../../commons/utilities";

import { ReactComponent as IconBabyNomal } from "../../commons/media/iconBabyNormal.svg";

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
  return (
    <a
      href={`/omedate/?birthday=${replaceDateHyphen(
        birthday
      )}&gender=${gender}`}
      className={`button ${className}`}
    >
      <IconBabyNomal />
      お祝い事をみる
    </a>
  );
};
