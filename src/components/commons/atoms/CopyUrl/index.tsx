type Props = {
  url: string;
  className?: string;
};
export const CopyUrl: React.FC<Props> = ({ url, className }) => {
  return <p className={className}>{url}</p>;
};
