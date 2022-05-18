import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useLocation } from "react-router-dom";

import style from "./style.module.css";

import { birthdayState, genderState } from "../../commons/keys";
import { currentDate } from "../../commons/utilities/";
import { Spacer } from "../../commons/atoms/Spacer";
import { Label } from "../../commons/atoms/Label";
import { InputDate } from "../../commons/atoms/InputDate";
import { Select } from "../../commons/atoms/Select";

export const BirthdayAndGender: React.FC = () => {
  const query = new URLSearchParams(useLocation().search);

  const queryBirthday = query.get("birthday");

  const queryGender = query.get("gender");

  const [birthday, setBirthday] = useRecoilState(birthdayState);

  useEffect(() => {
    if (birthday) return;
    if (queryBirthday) {
      const _year = queryBirthday.slice(0, 4);
      const _month = queryBirthday.slice(4, 6);
      const _day = queryBirthday.slice(6, 8);
      setBirthday(`${_year}-${_month}-${_day}`);
    } else {
      const _currentDate = String(currentDate("full"));
      _currentDate && setBirthday(_currentDate);
    }
  }, [birthday, queryBirthday, setBirthday]);

  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthday(e.target.value);
  };

  const [gender, setGender] = useRecoilState(genderState);

  useEffect(() => {
    if (gender) return;
    if (queryGender) {
      setGender(queryGender);
    } else {
      setGender("male");
    }
  }, [gender, queryGender, setGender]);

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
