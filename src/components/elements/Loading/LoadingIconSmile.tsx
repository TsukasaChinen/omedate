import { LoadingEffectSmile } from "./LoadingEffectSmile";
import { IconBabySmile } from "../../commons/atoms/Icons";

type Props = {
  className?: string;
  isShow: boolean;
};

export const LoadingIconSmile: React.FC<Props> = ({ className, isShow }) => {
  return (
    <i className={className} data-show={isShow}>
      <LoadingEffectSmile fill="#fccf00" />
      <LoadingEffectSmile fill="#fccf00" />
      <IconBabySmile fill="#fccf00" />
    </i>
  );
};
