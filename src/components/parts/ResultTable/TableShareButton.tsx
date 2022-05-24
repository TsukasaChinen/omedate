import { useSetRecoilState } from "recoil";

import { modalState } from "../../inits/keys";
import { ShareButton } from "../../elements/ShareButton";
import { ReactComponent as IconBabySmile } from "../../../assets/media/iconBabySmile.svg";

export const TableShareButton: React.FC<{ className?: string }> = ({
  className,
}) => {
  const setIsModal = useSetRecoilState(modalState);

  const handleCliclShowModal = () => {
    setIsModal(true);
  };

  return (
    <ShareButton
      text="結果をシェアする"
      className={`button ${className}`}
      onClick={handleCliclShowModal}
    >
      <IconBabySmile />
    </ShareButton>
  );
};
