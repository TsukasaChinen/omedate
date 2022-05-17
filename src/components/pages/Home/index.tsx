import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { useLocation } from "react-router-dom";

import "../../commons/style/common.css";

import { genderQuery } from "../../commons/keys";
import { Header } from "../../elements/Header";
import { Footer } from "../../elements/Footer";
import { Description } from "../../elements/Description";
import { BirthdayAndGender } from "../../elements/BirthdayAndGender";
import { Buttons } from "../../elements/Buttons";

export const Home: React.FC = () => {
  const search = useLocation().search;
  const query = new URLSearchParams(search);

  const queryGender = query.get("gender");
  const setGenderQuery = useSetRecoilState(genderQuery);

  useEffect(() => {
    if (!queryGender) return;
    setGenderQuery(queryGender);
  }, [queryGender, setGenderQuery]);

  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Description />
        <BirthdayAndGender />
        <Buttons />
      </main>
      <Footer />
    </div>
  );
};
