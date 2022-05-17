import { ReactNode } from "react";

type Props = React.ComponentPropsWithoutRef<"button"> & {
  text: string;
  className?: string;
  children?: ReactNode;
};

export const Button: React.FC<Props> = ({ text, className, children }) => (
  <button type="button" className={className}>
    {children}
    {text}
  </button>
);
