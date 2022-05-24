import React from "react";

type Props = {
  copyText: string;
  className?: string;
};

export const CopyTarget = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const { className, copyText } = props;
    return (
      <div id="copyUrl" className={className} ref={ref}>
        {copyText}
      </div>
    );
  }
);