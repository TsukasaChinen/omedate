import { useLocation } from "react-router-dom";

import { currentDate } from "../../commons/utilities/";
import { ResultText } from "../../elements/ResultText";

export const Result: React.FC = () => {
  const search = useLocation().search;
  const query = new URLSearchParams(search);

  const queryBirthday = query.get("birthday")?.split("-");
  const year = queryBirthday ? queryBirthday[0] : currentDate("year");
  const month = queryBirthday ? queryBirthday[1] : currentDate("month");
  const day = queryBirthday ? queryBirthday[2] : currentDate("day");

  const queryGender = query.get("gender");

  return (
    <main className="main">
      <ResultText
        gender={queryGender || ""}
        year={Number(year)}
        month={Number(month)}
        day={Number(day)}
      />
    </main>
  );
};
