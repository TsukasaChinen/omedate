import { forwardRef } from "react";

type Props = React.ComponentPropsWithoutRef<"button"> & {
  text: string;
};

export const CopyButton = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { className, text, onClick } = props;

  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      ref={ref}
      data-focus="false"
    >
      <span>{text}</span>
    </button>
  );
});
