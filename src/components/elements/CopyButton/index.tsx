import React from "react";

type Props = React.ComponentPropsWithoutRef<"button"> & {
  text: string;
};

export const CopyButton = React.forwardRef<HTMLButtonElement, Props>(
  (props, ref) => {
    const { className, text, onClick } = props;

    return (
      <button
        type="button"
        className={className}
        onClick={onClick}
        ref={ref}
        data-action="false"
      >
        <span>{text}</span>
      </button>
    );
  }
);
