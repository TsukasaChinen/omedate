import { Link } from "react-router-dom";

import { replaceDateHyphen } from "../../commons/utilities";

import { IconBabyNomal } from "../../commons/atoms/Icons";

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
    <Link
      to={`/?birthday=${replaceDateHyphen(birthday)}&gender=${gender}`}
      className={`button ${className}`}
    >
      <IconBabyNomal />
      お祝い事をみる
    </Link>
  );
};
