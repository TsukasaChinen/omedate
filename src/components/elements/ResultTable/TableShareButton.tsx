import { useSetRecoilState } from "recoil";

import { modalState } from "../../commons/keys";
import { ShareButton } from "../../commons/atoms/ShareButton";
import { ReactComponent as IconBabySmile } from "../../commons/media/iconBabySmile.svg";

export const TableShareButton: React.FC<{ gender: string | null }> = ({
  gender,
}) => {
  const setIsModal = useSetRecoilState(modalState);

  const handleCliclShowModal = () => {
    setIsModal(true);
  };

  return (
    <ShareButton
      text="結果をシェアする"
      className={`button ${gender === "male" && "-blue"}`}
      onClick={handleCliclShowModal}
    >
      <IconBabySmile />
    </ShareButton>
  );
};
