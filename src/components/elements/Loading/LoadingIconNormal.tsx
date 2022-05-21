import { IconBabyNomal } from "../../commons/atoms/Icons";

export const LoadingIconNormal: React.FC<{
  className?: string;
  isShow: boolean;
}> = ({ className, isShow }) => {
  return (
    <i className={className} data-show={isShow}>
      <IconBabyNomal fill="#fccf00" />
    </i>
  );
};
