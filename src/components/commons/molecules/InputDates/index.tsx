import { Label } from "../../atoms/Label";
import { InputDate } from "../../atoms/InputDate";

type Props = {
  text: string;
};

export const InputDates: React.FC<Props> = ({ text }) => {
  return (
    <Label>
      <span>{text}</span>
      <InputDate />
    </Label>
  );
};
