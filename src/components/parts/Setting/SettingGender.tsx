import { Label } from "../../elements/Label";
import { Select } from "../../elements/Select/index";

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
