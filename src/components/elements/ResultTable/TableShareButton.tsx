import { useSetRecoilState } from "recoil";

import { modalState } from "../../commons/keys";
import { ShareButton } from "../../commons/atoms/ShareButton";
import { IconBabySmile } from "../../commons/atoms/Icons";

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
