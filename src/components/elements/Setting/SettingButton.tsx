import { replaceDateHyphen } from "../../commons/utilities";

import { LinkButton } from "../../commons/atoms/LinkButton";
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
    <LinkButton
      href={`/?birthday=${replaceDateHyphen(birthday)}&gender=${gender}`}
      text="お祝い事をみる"
      className={`button ${className}`}
    >
      <IconBabyNomal />
    </LinkButton>
  );
};
