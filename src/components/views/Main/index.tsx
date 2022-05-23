import { useEffect } from "react";
import { useRecoilState } from "recoil";

import { queryState, resultState } from "../../inits/keys";
import { Description } from "../../templates/Description";
import { Setting } from "../../templates/Setting";
import { ResultTable } from "../../templates/ResultTable";
import { Modals } from "../../templates/Modal";

export const Main: React.FC = () => {
  const [isResult, setIsResult] = useRecoilState(resultState);

  const [queries, setQueries] = useRecoilState(queryState);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (!query.get("birthday") && !query.get("gender")) return;

    const birthday = query.get("birthday");
    const gender = query.get("gender");

    if (birthday !== queries.birthday) {
      setQueries((prev) => {
        return {
          ...prev,
          birthday: query.get("birthday"),
        };
      });
    }
    if (gender !== queries.gender) {
      setQueries((prev) => {
        return {
          ...prev,
          gender: query.get("gender"),
        };
      });
    }
  }, [queries.birthday, queries.gender, setQueries]);

  useEffect(() => {
    queries.birthday && queries.gender ? setIsResult(true) : setIsResult(false);
  }, [queries.birthday, queries.gender, setIsResult]);

  return (
    <main className="main">
      <Description isResult={isResult} />
      <Setting isResult={isResult} />
      {isResult && (
        <>
          <ResultTable />
          <Modals />
        </>
      )}
    </main>
  );
};
