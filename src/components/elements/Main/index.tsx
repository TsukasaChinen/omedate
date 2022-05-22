import { useEffect } from "react";
import { useRecoilState } from "recoil";

import { queryState } from "../../commons/keys";
import { Description } from "../../elements/Description";
import { Setting } from "../../elements/Setting";
import { ResultTable } from "../../elements/ResultTable";
import { Modals } from "../../elements/Modal";

export const Main: React.FC = () => {
  const [queries, setQueries] = useRecoilState(queryState);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (!query.get("birthday") && !query.get("gender")) return;
    if (queries.birthday === "" || query.get("birthday") !== queries.birthday) {
      setQueries((prev) => {
        return {
          ...prev,
          birthday: query.get("birthday"),
        };
      });
    }
    if (queries.gender === "" || query.get("gender") !== queries.gender) {
      setQueries((prev) => {
        return {
          ...prev,
          gender: query.get("gender"),
        };
      });
    }
  }, [queries.birthday, queries.gender, setQueries]);

  return (
    <main className="main">
      <Description />
      <Setting />
      {queries.birthday && queries.gender && (
        <>
          <ResultTable />
          <Modals />
        </>
      )}
    </main>
  );
};
