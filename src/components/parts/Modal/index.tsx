import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { modalState } from "../../inits/keys";
import { ModalClose } from "./ModalClose";
import { ModalContent } from "./ModalContent";
import style from "./style.module.css";

export const Modals: React.FC = () => {
  const [isModal, setIsModal] = useRecoilState(modalState);

  const [, setCopyLabel] = useState<string>("copy");

  useEffect(() => {
    if (isModal) return;
    const timer = setTimeout(() => {
      setCopyLabel("copy");
    }, 500);
    return () => clearTimeout(timer);
  }, [isModal]);

  const handleClickCloseModal = () => {
    setIsModal(false);
  };

  return (
    <div className={style.wrapper} data-show={isModal}>
      <ModalClose className={style.close} onClick={handleClickCloseModal} />
      <ModalContent
        className={style.content}
        onClickCloseModal={handleClickCloseModal}
      />
    </div>
  );
};
