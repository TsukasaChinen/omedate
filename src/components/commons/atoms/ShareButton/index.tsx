import { ReactNode } from "react";

type Props = React.ComponentPropsWithoutRef<"button"> & {
  text: string;
  className?: string;
  children?: ReactNode;
};

export const ShareButton: React.FC<Props> = ({
  text,
  className,
  children,
  onClick,
}) => (
  <button type="button" className={className} onClick={onClick}>
    {children}
    {text}
  </button>
);
