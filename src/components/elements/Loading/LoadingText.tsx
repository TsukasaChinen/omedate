type Props = {
  className?: string;
  text: string;
  isShow: boolean;
};

export const LoadingText: React.FC<Props> = ({ className, text, isShow }) => {
  return (
    <p className={className} data-show={isShow}>
      {text}
    </p>
  );
};
