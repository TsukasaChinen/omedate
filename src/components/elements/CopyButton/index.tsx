import React from "react";

type Props = React.ComponentPropsWithoutRef<"button"> & {
  text: string;
  isFocus?: boolean;
};

export const CopyButton = React.forwardRef<HTMLButtonElement, Props>(
  (props, ref) => {
    const { className, text, onClick, isFocus } = props;

    return (
      <button
        type="button"
        className={className}
        onClick={onClick}
        ref={ref}
        data-focus={isFocus}
      >
        {text}
      </button>
    );
  }
);
