import { useEffect, useState, useRef } from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import { birthdayState, genderState, modalState } from "../../inits/keys";
import { replaceDateHyphen } from "../../utilities";
import { Spacer } from "../../elements/Spacer";
import { CloseButton } from "../../elements/CloseButton";
import { CopyButton } from "../../elements/CopyButton";
import { CopyTarget } from "../../elements/CopyTarget";
import { ModalClose } from "./ModalClose";
import { ModalContent } from "./ModalContent";
import style from "./style.module.css";

export const Modals: React.FC = () => {
  const birthday = useRecoilValue(birthdayState);

  const gender = useRecoilValue(genderState);

  const [isModal, setIsModal] = useRecoilState(modalState);

  const [copyLabel, setCopyLabel] = useState<string>("copy");

  const copyTarget = useRef<HTMLDivElement>(null);

  const copyButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isModal) {
      copyButton.current?.focus();
      setCopyLabel("copy");
      return;
    }
  }, [isModal]);

  const handleClickCloseModal = () => {
    setIsModal(false);
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

  const copyText: string = `${
    window.location.href.split("?")[0]
  }?birthday=${replaceDateHyphen(birthday)}&gender=${gender}`;

  return (
    <div className={style.wrapper} data-show={isModal}>
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
            isFocus={isModal}
          />
        </div>
      </ModalContent>
    </div>
  );
};
