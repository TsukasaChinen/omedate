import { useEffect, useState, useRef } from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import { birthdayState, genderState, modalState } from "../../config/keys";
import { replaceDateHyphen } from "../../utilities";
import { Spacer } from "../../elements/Spacer";
import { CloseButton } from "../../elements/CloseButton";
import { CopyButton } from "../../elements/CopyButton";
import { CopyTarget } from "../../elements/CopyTarget";
import { ModalClose } from "./ModalClose";
import { ModalContent } from "./ModalContent";
import style from "./modal.module.css";

export const Modal: React.FC = () => {
  const birthday = useRecoilValue(birthdayState);

  const gender = useRecoilValue(genderState);

  const [isModal, setIsModal] = useRecoilState(modalState);

  const [isShow, setIsShow] = useState<boolean>(false);

  const [copyLabel, setCopyLabel] = useState<string>("copy");

  const copyTarget = useRef<HTMLDivElement>(null);

  const copyButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isModal) return;
    setIsShow(true);
    copyButton.current?.focus();
  }, [isModal]);

  useEffect(() => {
    if (isShow) return;
    const timer = setTimeout(() => {
      setIsModal(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [isShow, setIsModal]);

  const handleClickCloseModal = () => {
    setIsShow(false);
  };

  const handleClickCopyUrl = () => {
    if (!navigator.clipboard) return;
    const copyEle = copyTarget.current;
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

  const copyText: string = `${window.location.href.split("?")[0]}?birthday=${
    birthday && replaceDateHyphen(birthday)
  }&gender=${gender}`;

  return (
    <div className={style.wrapper} data-show={isShow}>
      <ModalClose className={style.close} onClick={handleClickCloseModal} />
      <ModalContent className={style.content}>
        <CloseButton
          className={style.closeButton}
          onClick={handleClickCloseModal}
        />
        <p>下記のURLをコピーしてメールやLINEで送ってください。</p>
        <Spacer height={{ s: 10 }} />
        <div className={style.copy}>
          <CopyTarget
            ref={copyTarget}
            copyText={copyText}
            className={style.url}
          />
          <CopyButton
            ref={copyButton}
            text={copyLabel}
            className={`button ${style.button}`}
            onClick={handleClickCopyUrl}
          />
        </div>
      </ModalContent>
    </div>
  );
};
