type Props = React.ComponentPropsWithoutRef<"select"> & {
  className?: string;
  values: {
    value: string;
    text: string;
  }[];
};

export const Select: React.FC<Props> = ({ values, className, onChange }) => {
  return (
    <select className={className} onChange={onChange}>
      {values.map((v, i) => (
        <option key={i} value={v.value}>
          {v.text}
        </option>
      ))}
    </select>
  );
};
