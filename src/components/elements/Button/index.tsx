import { useRecoilValue, useSetRecoilState } from "recoil";

import style from "./style.module.css";

import {
  birthdayState,
  genderState,
  modalState,
  queryState,
} from "../../commons/keys";
import { replaceDateHyphen } from "../../commons/utilities";
import { LinkButton } from "../../commons/atoms/LinkButton";
import { ShareButton } from "../../commons/atoms/ShareButton";
import { IconBabyNomal } from "../../commons/atoms/Icons";
import { IconBabySmile } from "../../commons/atoms/Icons";
import { Spacer } from "../../commons/atoms/Spacer";

export const Button: React.FC = () => {
  const queries = useRecoilValue(queryState);
  const birthday = useRecoilValue(birthdayState);
  const gender = useRecoilValue(genderState);

  const setIsModal = useSetRecoilState(modalState);

  const handleCliclShowModal = () => {
    setIsModal(true);
  };
  return (
    <div className={style.wrapper}>
      <Spacer height={{ s: 40 }} />
      <LinkButton
        href={`/?birthday=${replaceDateHyphen(birthday)}&gender=${gender}`}
        text={`${
          !queries.birthday && !queries.gender ? "お祝い事をみる" : "更新する"
        }`}
        className={`primaryButton ${style.button}`}
      >
        <IconBabyNomal className={style.icon} />
      </LinkButton>
      {/* {!queries.birthday && !queries.gender ? (
        <LinkButton
          href={`/?birthday=${replaceDateHyphen(birthday)}&gender=${gender}`}
          text="お祝い事をみる"
          className={`primaryButton ${style.button}`}
        >
          <IconBabyNomal className={style.icon} />
        </LinkButton>
      ) : (
        <ShareButton
          text="この結果をシェアする"
          className={`primaryButton ${style.button}`}
          onClick={handleCliclShowModal}
        >
          <IconBabySmile className={style.icon} />
        </ShareButton>
      )} */}
    </div>
  );
};
