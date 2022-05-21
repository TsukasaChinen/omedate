type Props = {
  className?: string;
  text: string;
};

export const LoadingText: React.FC<Props> = ({ className, text }) => {
  return <p className={className}>{text}</p>;
};
