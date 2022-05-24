type Props = React.ComponentPropsWithoutRef<"button"> & {
  text: string;
};

export const CopyButton: React.FC<Props> = ({ text, className, onClick }) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      {text}
    </button>
  );
};
