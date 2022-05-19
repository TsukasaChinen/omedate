import { useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import style from "./style.module.css";

import { birthdayState, genderState, queryState } from "../../commons/keys";
import { currentDate, joinDateHyphen } from "../../commons/utilities";
import { Spacer } from "../../commons/atoms/Spacer";
import { SettingBirthday } from "./SettingBirthday";
import { SettingGender } from "./SettingGender";
import { SettingButton } from "./SettingButton";

export const Setting: React.FC = () => {
  const queries = useRecoilValue(queryState);

  const [birthday, setBirthday] = useRecoilState(birthdayState);

  useEffect(() => {
    if (queries.birthday) {
      setBirthday(joinDateHyphen(queries.birthday));
    } else {
      const _currentDate = String(currentDate());
      _currentDate && setBirthday(_currentDate);
    }
  }, [queries.birthday, setBirthday]);

  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthday(e.target.value);
  };

  const [gender, setGender] = useRecoilState(genderState);

  useEffect(() => {
    if (queries.gender) {
      setGender(queries.gender);
    } else {
      setGender("male");
    }
  }, [queries.gender, setGender]);

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
      <SettingBirthday
        value={birthday}
        onChange={onChangeDate}
        text="生年月日"
        className={style.label}
      />
      <Spacer height={{ s: 20 }} />
      <SettingGender
        values={genders}
        value={gender}
        className={`${style.label} ${style.labelSelect}`}
        onChange={onChangeGender}
        text="性　　別"
      />
      <Spacer height={{ s: 40 }} />
      <SettingButton
        birthday={birthday}
        gender={gender}
        className={style.button}
        queries={queries}
      />
    </div>
  );
};