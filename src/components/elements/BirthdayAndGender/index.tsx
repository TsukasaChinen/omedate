import { useRecoilState } from "recoil";

import style from "./style.module.css";

import { birthdayState, genderState } from "../../commons/keys";
import { Spacer } from "../../commons/atoms/Spacer";
import { Label } from "../../commons/atoms/Label";
import { InputDate } from "../../commons/atoms/InputDate";
import { Select } from "../../commons/atoms/Select";

export const BirthdayAndGender: React.FC = () => {
  const [birthday, setBirthday] = useRecoilState(birthdayState);

  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthday(e.target.value);
  };

  const [gender, setGender] = useRecoilState(genderState);

  const genders = [
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
    setGender(e.target.value);
  };

  return (
    <div className={style.wrapper}>
      <Spacer height={{ s: 20, m: 40 }} />
      <Label text="生年月日" className={style.label}>
        <InputDate
          className={style.input}
          value={birthday}
          onChange={onChangeDate}
        />
      </Label>
      <Spacer height={{ s: 20 }} />
      <Label text="性　　別" className={`${style.label}, ${style.labelSelect}`}>
        <Select
          className={style.select}
          values={genders}
          value={gender}
          onChange={onChangeGender}
        />
      </Label>
    </div>
  );
};
