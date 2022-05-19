import { useLocation } from "react-router-dom";

import { Description } from "../../elements/Description";
import { Setting } from "../../elements/Setting";
import { Button } from "../../elements/Button";
import { Modals } from "../../elements/Modal";

export const Home: React.FC = () => {
  const query = new URLSearchParams(useLocation().search);

  const queries = {
    birthday: query.get("birthday"),
    gender: query.get("gender"),
  };

  return (
    <main className="main">
      <Description queries={queries} />
      <Setting />
      <Button queries={queries} />
      <Modals />
    </main>
  );
};
