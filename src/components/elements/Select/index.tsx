import { useState, useEffect } from "react";
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
  const [count, setCount] = useState<number>(1);
  useEffect(() => {
    if (value) {
      setCount((prev) => prev + 1);
    }
  }, [value]);

  return (
    <select
      key={count}
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
