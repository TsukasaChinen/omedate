import React from "react";

type Props = {
  url: string;
  className?: string;
};

export const CopyUrl = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, url } = props;
  return (
    <div id="copyUrl" className={className} ref={ref}>
      {url}
    </div>
  );
});
