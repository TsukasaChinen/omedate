import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

import {
  birthdayState,
  genderState,
  queryState,
  resultState,
} from "../../inits/keys";
import { GenderTypes } from "../../inits/types";
import { joinDateHyphen } from "../../utilities";
import { Description } from "../../parts/Description";
import { Setting } from "../../parts/Setting";
import { ResultTable } from "../../parts/ResultTable";
import { Modals } from "../../parts/Modal";

export const HomeMain: React.FC = () => {
  const [isResult, setIsResult] = useRecoilState(resultState);

  const [query, setQuery] = useRecoilState(queryState);

  const setBirthday = useSetRecoilState(birthdayState);

  const setGender = useSetRecoilState(genderState);

  useEffect(
    (birthday = query.birthday, gender = query.gender) => {
      const search = new URLSearchParams(window.location.search);
      if (!search.get("birthday") && !search.get("gender")) return;

      const getBirthday = search.get("birthday");
      const getGender = search.get("gender");

      if (getBirthday !== birthday) {
        setQuery((prev) => {
          return {
            ...prev,
            birthday: getBirthday,
          };
        });
      }
      if (getGender !== gender) {
        setQuery((prev) => {
          return {
            ...prev,
            gender: getGender,
          };
        });
      }
    },
    [query.birthday, query.gender, setQuery]
  );

  const today = () => {
    const currentDate = new Date();
    const y = currentDate.getFullYear();
    const m = currentDate.getMonth() + 1;
    const d = currentDate.getDate();
    return `${y}-${("00" + m).slice(-2)}-${d}`;
  };

  useEffect(
    (birthday = query.birthday, gender = query.gender) => {
      birthday ? setBirthday(joinDateHyphen(birthday)) : setBirthday(today);
      gender ? setGender(gender as GenderTypes) : setGender("male");
      birthday && gender ? setIsResult(true) : setIsResult(false);
    },
    [query.birthday, query.gender, setBirthday, setGender, setIsResult]
  );

  return (
    <main className="main">
      <Description />
      <Setting />
      {isResult && (
        <>
          <ResultTable />
          <Modals />
        </>
      )}
    </main>
  );
};
