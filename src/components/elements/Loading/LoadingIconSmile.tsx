import { LoadingEffectSmile } from "./LoadingEffectSmile";
import { IconBabySmile } from "../../commons/atoms/Icons";

export const LoadingIconSmile: React.FC<{
  className?: string;
  isShow: boolean;
}> = ({ className, isShow }) => {
  return (
    <i className={className} data-show={isShow}>
      <LoadingEffectSmile fill="#fccf00" />
      <LoadingEffectSmile fill="#fccf00" />
      <IconBabySmile fill="#fccf00" />
    </i>
  );
};
