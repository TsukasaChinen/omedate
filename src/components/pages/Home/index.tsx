import { useLocation } from "react-router-dom";

import { Description } from "../../elements/Description";
import { BirthdayAndGender } from "../../elements/BirthdayAndGender";
import { Buttons } from "../../elements/Buttons";
import { Modal } from "../../elements/Modal";

export const Home: React.FC = () => {
  const query = new URLSearchParams(useLocation().search);

  const queries = {
    birthday: query.get("birthday"),
    gender: query.get("gender"),
  };

  return (
    <main className="main">
      <Description queries={queries} />
      <BirthdayAndGender />
      <Buttons queries={queries} />
      <Modal />
    </main>
  );
};
