import { useRecoilValue, useSetRecoilState } from "recoil";

import style from "./style.module.css";

import { QuiriesTypes } from "../../commons/types";

import { birthdayState, genderState, modalState } from "../../commons/keys";
import { LinkButton } from "../../commons/atoms/LinkButton";
import { ShareButton } from "../../commons/atoms/ShareButton";
import { IconBabyNomal } from "../../commons/atoms/Icons";
import { IconBabySmile } from "../../commons/atoms/Icons";
import { Spacer } from "../../commons/atoms/Spacer";

export const Buttons: React.FC<QuiriesTypes> = ({ queries }) => {
  const birthday = useRecoilValue(birthdayState);
  const gender = useRecoilValue(genderState);

  const setIsModal = useSetRecoilState(modalState);

  const handleCliclShowModal = () => {
    setIsModal(true);
  };
  return (
    <div className={style.wrapper}>
      <Spacer height={{ s: 40 }} />
      {!queries.birthday && !queries.gender ? (
        <LinkButton
          href={`/?birthday=${birthday.replace(/-/g, "")}&gender=${gender}`}
          text="お祝い事をみる"
          className={style.button}
        >
          <IconBabyNomal className={style.icon} />
        </LinkButton>
      ) : (
        <ShareButton
          text="この結果をシェアする"
          className={style.button}
          onClick={handleCliclShowModal}
        >
          <IconBabySmile className={style.icon} />
        </ShareButton>
      )}
    </div>
  );
};
