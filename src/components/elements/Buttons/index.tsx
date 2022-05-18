import { useRecoilValue } from "recoil";

import style from "./style.module.css";

import { birthdayState, genderState } from "../../commons/keys";
import { LinkButton } from "../../commons/atoms/LinkButton";
import { IconBaby } from "../../commons/atoms/IconBaby";
import { Spacer } from "../../commons/atoms/Spacer";

export const Buttons: React.FC = () => {
  const birthday = useRecoilValue(birthdayState);
  const gender = useRecoilValue(genderState);

  return (
    <div className={style.wrapper}>
      <Spacer height={{ s: 40 }} />
      <LinkButton
        href={`/result/?birthday=${birthday.replace(
          /-/g,
          ""
        )}&gender=${gender}`}
        text="お祝い事をみる"
        className={style.button}
      >
        <IconBaby className={style.icon} />
      </LinkButton>
    </div>
  );
};
