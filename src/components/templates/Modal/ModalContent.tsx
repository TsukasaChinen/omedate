import { ReactNode } from "react";

type Props = {
  className?: string;
  children?: ReactNode;
};

export const ModalContent: React.FC<Props> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};
