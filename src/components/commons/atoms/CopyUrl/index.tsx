type Props = {
  url: string;
  className?: string;
};
export const CopyUrl: React.FC<Props> = ({ url, className }) => {
  return (
    <p id="copyUrl" className={className}>
      {url}
    </p>
  );
};
