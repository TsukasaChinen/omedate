import { ReactNode } from "react";

type Props = {
  text: string;
  children: ReactNode;
  className?: string;
};

export const Label: React.FC<Props> = ({ text, children, className }) => {
  return (
    <label className={className}>
      <span>{text}</span>
      {children}
    </label>
  );
};
