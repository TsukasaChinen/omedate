import { Label } from "../../parts/Label";
import { InputDate } from "../../parts/InputDate";

type Props = React.ComponentPropsWithoutRef<"input"> & {
  text: string;
  className?: string;
};

export const SettingBirthday: React.FC<Props> = ({
  value,
  onChange,
  text,
  className,
}) => {
  return (
    <Label text={text} className={className}>
      <InputDate value={value} onChange={onChange} />
    </Label>
  );
};
