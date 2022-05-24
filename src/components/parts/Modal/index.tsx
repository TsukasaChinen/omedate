import { useState, useRef } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import { birthdayState, genderState, modalState } from "../../inits/keys";
import { replaceDateHyphen } from "../../utilities";
import { Spacer } from "../../elements/Spacer";
import { CloseButton } from "../../elements/CloseButton";
import { CopyButton } from "../../elements/CopyButton";
import { CopyUrl } from "../../elements/CopyUrl";
import { ModalClose } from "./ModalClose";
import { ModalContent } from "./ModalContent";
import style from "./style.module.css";

export const Modals: React.FC = () => {
  const birthday = useRecoilValue(birthdayState);
  const gender = useRecoilValue(genderState);

  const [isModal, setIsModal] = useRecoilState(modalState);

  const handleClickCloseModal = () => {
    setIsModal(false);
  };

  const copyUrlEle = useRef<HTMLDivElement>(null);

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

  const fullUrl = window.location.href.split("?");

  return (
    <div className={style.wrapper} data-show={isModal}>
      <ModalClose className={style.close} onClick={handleClickCloseModal} />
      <ModalContent className={style.content}>
        <CloseButton
          className={style.closeButton}
          onClick={handleClickCloseModal}
        >
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
      </ModalContent>
    </div>
  );
};
