import { Label } from "../../commons/atoms/Label";
import { Select } from "../../commons/atoms/Select/index";

type Props = React.ComponentPropsWithoutRef<"select"> & {
  values: { [key: string]: string }[];
  text: string;
  className?: string;
};

export const SettingGender: React.FC<Props> = ({
  values,
  value,
  onChange,
  text,
  className,
}) => {
  return (
    <Label text={text} className={className}>
      <Select values={values} value={value} onChange={onChange} />
    </Label>
  );
};
