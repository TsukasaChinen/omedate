import { useRecoilState } from "recoil";

import style from "./style.module.css";

import { modalState } from "../../commons/keys";
import { Spacer } from "../../commons/atoms/Spacer";
import { CopyButton } from "../../commons/atoms/CopyButton";
import { CopyUrl } from "../../commons/atoms/CopyUrl";
import { ModalClose } from "./ModalClose";
import { ModalContent } from "./ModalContent";

export const Modal: React.FC = () => {
  const [isModal, setIsModal] = useRecoilState(modalState);

  const handleClickCloseModal = () => {
    setIsModal(false);
  };

  return (
    <div className={style.wrapper} data-show={isModal}>
      <ModalClose className={style.close} onClick={handleClickCloseModal} />
      <ModalContent className={style.inner}>
        <div className={style.content}>
          <p>下記のURLをコピーしてメールやLINEで送ってください。</p>
          <Spacer height={{ s: 10 }} />
          <div className={style.copy}>
            <CopyUrl
              url="https://trylight.net/omedate?birthday=20220314&gender=male"
              className={style.url}
            />
            <CopyButton text="copy" className={style.button} />
          </div>
        </div>
      </ModalContent>
    </div>
  );
};
