import { useState, useRef } from "react";
import { useRecoilValue } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import { birthdayState, genderState } from "../../inits/keys";
import { replaceDateHyphen } from "../../utilities";
import { CloseButton } from "../../elements/CloseButton";
import { Spacer } from "../../elements/Spacer";
import { CopyButton } from "../../elements/CopyButton";
import { CopyUrl } from "../../elements/CopyUrl";
import style from "./style.module.css";

type Props = {
  className?: string;
  onClickCloseModal: () => void;
};

export const ModalContent: React.FC<Props> = ({
  className,
  onClickCloseModal,
}) => {
  const birthday = useRecoilValue(birthdayState);

  const gender = useRecoilValue(genderState);

  const copyUrlEle = useRef<HTMLDivElement>(null);

  const fullUrl = window.location.href.split("?");

  const [copyLabel, setCopyLabel] = useState<string>("copy");

  const handleClickCopyUrl = () => {
    if (!navigator.clipboard) return;
    const copyEle = copyUrlEle.current;
    copyEle &&
      navigator.clipboard
        .writeText(copyEle.innerText)
        .then(() => {
          setCopyLabel("copied");
        })
        .catch(() => {
          setCopyLabel("failed");
        });
  };

  return (
    <div className={className}>
      <CloseButton className={style.closeButton} onClick={onClickCloseModal}>
        <FontAwesomeIcon icon={faCircleXmark} />
      </CloseButton>
      <p>下記のURLをコピーしてメールやLINEで送ってください。</p>
      <Spacer height={{ s: 10 }} />
      <div className={style.copy}>
        <CopyUrl
          ref={copyUrlEle}
          url={`${fullUrl[0]}?birthday=${replaceDateHyphen(
            birthday
          )}&gender=${gender}`}
          className={style.url}
        />
        <CopyButton
          text={copyLabel}
          className={`button ${style.button}`}
          onClick={handleClickCopyUrl}
        />
      </div>
    </div>
  );
};
