import { ReactNode } from "react";

type Props = React.ComponentPropsWithoutRef<"a"> & {
  text: string;
  href: string;
  className?: string;
  children?: ReactNode;
};

export const LinkButton: React.FC<Props> = ({
  text,
  href,
  className,
  children,
}) => (
  <a href={href} className={className}>
    {children}
    {text}
  </a>
);
