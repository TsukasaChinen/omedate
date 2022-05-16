import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Label: React.FC<Props> = ({ children }) => (
  <label>{children}</label>
);
