import { useSetRecoilState } from "recoil";

import { modalState } from "../../commons/keys";
import { ShareButton } from "../../commons/atoms/ShareButton";
import { IconBabySmile } from "../../commons/atoms/Icons";

type Props = {
  className?: string;
};

export const TableShareButton: React.FC<Props> = ({ className }) => {
  const setIsModal = useSetRecoilState(modalState);

  const handleCliclShowModal = () => {
    setIsModal(true);
  };

  return (
    <ShareButton
      text="結果をシェアする"
      className={`secondaryButton ${className}`}
      onClick={handleCliclShowModal}
    >
      <IconBabySmile />
    </ShareButton>
  );
};
