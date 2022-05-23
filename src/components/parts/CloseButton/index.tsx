import { ReactNode } from "react";

type Props = React.ComponentPropsWithoutRef<"button"> & {
  children: ReactNode;
};

export const CloseButton: React.FC<Props> = ({
  className,
  children,
  onClick,
}) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
};
