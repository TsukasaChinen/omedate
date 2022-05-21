export const LoadingText: React.FC<{
  className?: string;
  text: string;
}> = ({ className, text }) => {
  return <p className={className}>{text}</p>;
};
