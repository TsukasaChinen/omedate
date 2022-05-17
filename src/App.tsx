import { RecoilRoot } from "recoil";

import "./components/commons/style/common.css";

import { Header } from "./components/elements/Header";
import { Description } from "./components/elements/Description";
import { BirthdayAndGender } from "./components/elements/BirthdayAndGender";
import { Buttons } from "./components/elements/Buttons";
import { Footer } from "./components/elements/Footer";

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <div className="wrapper">
        <Header />
        <main className="main">
          <Description />
          <BirthdayAndGender />
          <Buttons />
        </main>
        <Footer />
      </div>
    </RecoilRoot>
  );
};

export default App;
