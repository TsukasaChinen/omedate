import { useRecoilValue } from "recoil";
import { useLocation } from "react-router-dom";

import { birthdayState, genderState } from "../../commons/keys";
import { currentDate } from "../../commons/utilities";

import { ResultText } from "../../elements/ResultText";

export const Result: React.FC = () => {
  const query = new URLSearchParams(useLocation().search);

  const queryBirthday = query.get("birthday");
  const year = Number(
    queryBirthday ? queryBirthday?.slice(0, 4) : currentDate("year")
  );
  const month = Number(
    queryBirthday ? queryBirthday?.slice(4, 6) : currentDate("month")
  );
  const day = Number(
    queryBirthday ? queryBirthday?.slice(6, 8) : currentDate("day")
  );

  const queryGender = query.get("gender");

  console.log(useRecoilValue(birthdayState));
  console.log(useRecoilValue(genderState));

  return (
    <main className="main">
      <ResultText
        gender={queryGender || ""}
        year={year}
        month={month}
        day={day}
      />
    </main>
  );
};