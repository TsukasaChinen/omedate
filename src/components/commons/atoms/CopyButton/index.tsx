type Props = React.ComponentPropsWithoutRef<"button"> & {
  text: string;
};
export const CopyButton: React.FC<Props> = ({ text, className }) => {
  return (
    <button type="button" className={className}>
      {text}
    </button>
  );
};
