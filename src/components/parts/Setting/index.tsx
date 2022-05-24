import { useEffect } from "react";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";

import {
  birthdayState,
  genderState,
  resultState,
  loadingState,
} from "../../inits/keys";
import { GenderTypes } from "../../inits/types";
import { windowHistoryReplaceState } from "../../utilities";
import { Spacer } from "../../elements/Spacer";
import { SettingBirthday } from "./SettingBirthday";
import { SettingGender } from "./SettingGender";
import { SettingButton } from "./SettingButton";
import style from "./style.module.css";

export const Setting: React.FC = () => {
  const isResult = useRecoilValue(resultState);

  const setIsLoading = useSetRecoilState(loadingState);

  const [birthday, setBirthday] = useRecoilState(birthdayState);

  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
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
