import { useEffect } from "react";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";

import style from "./style.module.css";

import { GenderTypes } from "../../inits/types";

import {
  birthdayState,
  genderState,
  queryState,
  loadingState,
} from "../../inits/keys";

import {
  currentDate,
  joinDateHyphen,
  windowHistoryReplaceState,
} from "../../utilities";

import { Spacer } from "../../parts/Spacer";
import { SettingBirthday } from "./SettingBirthday";
import { SettingGender } from "./SettingGender";
import { SettingButton } from "./SettingButton";

export const Setting: React.FC<{ isResult: boolean }> = ({ isResult }) => {
  const setIsLoading = useSetRecoilState(loadingState);

  const queries = useRecoilValue(queryState);

  const [birthday, setBirthday] = useRecoilState(birthdayState);

  useEffect(() => {
    queries.birthday
      ? setBirthday(joinDateHyphen(queries.birthday))
      : setBirthday(String(currentDate()));
  }, [queries.birthday, setBirthday]);

  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    setBirthday(e.target.value);
  };

  const [gender, setGender] = useRecoilState(genderState);

  useEffect(() => {
    queries.gender
      ? setGender(queries.gender as GenderTypes)
      : setGender("male");
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
    setIsLoading(true);
    setGender(e.target.value as GenderTypes);
  };

  useEffect(() => {
    if (!isResult) return;
    windowHistoryReplaceState(birthday, gender);
  }, [birthday, gender, isResult]);

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
      {!isResult && (
        <>
          <Spacer height={{ s: 40 }} />
          <SettingButton birthday={birthday} gender={gender} />
        </>
      )}
    </div>
  );
};
