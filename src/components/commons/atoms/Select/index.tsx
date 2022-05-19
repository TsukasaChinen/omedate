type Props = React.ComponentPropsWithoutRef<"select"> & {
  className?: string;
  values: { [key: string]: string }[];
};

export const Select: React.FC<Props> = ({
  values,
  value,
  className,
  onChange,
}) => {
  return (
    <select
      key={Math.random()}
      className={className}
      onChange={onChange}
      defaultValue={value}
    >
      {values.map((v, i) => (
        <option key={i} value={v.value}>
          {v.text}
        </option>
      ))}
    </select>
  );
};
