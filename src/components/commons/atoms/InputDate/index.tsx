type Props = React.ComponentPropsWithoutRef<"input"> & {
  className?: string;
};

export const InputDate: React.FC<Props> = ({ className, value, onChange }) => {
  return (
    <input
      type="date"
      className={className}
      value={value}
      onChange={onChange}
    />
  );
};
