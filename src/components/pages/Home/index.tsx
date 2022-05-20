import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useLocation } from "react-router-dom";

import { queryState } from "../../commons/keys";
import { Description } from "../../elements/Description";
import { Modals } from "../../elements/Modal";
import { Setting } from "../../elements/Setting";
import { Result } from "../../elements/Result";

export const Home: React.FC = () => {
  const location = useLocation().search;

  const [queries, setQueries] = useRecoilState(queryState);

  useEffect(() => {
    const query = new URLSearchParams(location);
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
  }, [location, queries.birthday, queries.gender, setQueries]);

  return (
    <main className="main">
      <Description />
      <Setting />
      {queries.birthday && queries.gender && (
        <>
          <Result />
          <Modals />
        </>
      )}
    </main>
  );
};
