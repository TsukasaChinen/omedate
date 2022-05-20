import { useSetRecoilState } from "recoil";

import { modalState } from "../../commons/keys";
import { ShareButton } from "../../commons/atoms/ShareButton";
import { IconBabySmile } from "../../commons/atoms/Icons";

type Props = {
  gender: string | null;
  className?: string;
};

export const TableShareButton: React.FC<Props> = ({ gender, className }) => {
  const setIsModal = useSetRecoilState(modalState);

  const handleCliclShowModal = () => {
    setIsModal(true);
  };

  return (
    <ShareButton
      text="結果をシェアする"
      className={`button ${gender === "male" && "-blue"} ${className}`}
      onClick={handleCliclShowModal}
    >
      <IconBabySmile />
    </ShareButton>
  );
};
