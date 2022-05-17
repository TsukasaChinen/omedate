import useMedia from "use-media";

import style from "./style.module.css";

import { Spacer } from "../../commons/atoms/Spacer";
import { Label } from "../../commons/atoms/Label";
import { InputDate } from "../../commons/atoms/InputDate";
import { Select } from "../../commons/atoms/Select";

export const BirthdayAndGender: React.FC = () => {
  const isWide = useMedia({ minWidth: "768px" });

  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const selectValues = [
    {
      value: "male",
      text: "男の子",
    },
    {
      value: "female",
      text: "女の子",
    },
  ];

  const onChangeGender = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  };

  return (
    <div className={style.wrapper}>
      <Spacer height={isWide ? 40 : 20} />
      <Label text="生年月日" className={style.label}>
        <InputDate
          className={style.input}
          value="2022-05-01"
          onChange={onChangeDate}
        />
      </Label>
      <Spacer height={20} />
      <Label text="性　　別">
        <Select
          className={style.select}
          values={selectValues}
          onChange={onChangeGender}
        />
      </Label>
    </div>
  );
};
