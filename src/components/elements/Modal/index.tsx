import { useState, useRef } from "react";
import { useRecoilState } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import style from "./style.module.css";

import { modalState } from "../../commons/keys";
import { Spacer } from "../../commons/atoms/Spacer";
import { CloseButton } from "../../commons/atoms/CloseButton";
import { CopyButton } from "../../commons/atoms/CopyButton";
import { CopyUrl } from "../../commons/atoms/CopyUrl";
import { ModalClose } from "./ModalClose";
import { ModalContent } from "./ModalContent";

export const Modal: React.FC = () => {
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
            url="https://trylight.net/omedate?birthday=20220314&gender=male"
            className={style.url}
          />

          <CopyButton
            text={copyLabel}
            className={`primaryButton ${style.button}`}
            onClick={handleClickCopyUrl}
          />
        </div>
      </ModalContent>
    </div>
  );
};
