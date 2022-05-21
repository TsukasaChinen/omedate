import { IconBabyNomal } from "../../commons/atoms/Icons";

type Props = {
  className?: string;
  isShow: boolean;
};

export const LoadingIconNormal: React.FC<Props> = ({ className, isShow }) => {
  return (
    <i className={className} data-show={isShow}>
      <IconBabyNomal fill="#fccf00" />
    </i>
  );
};
