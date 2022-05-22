import { RecoilRoot } from "recoil";

import "./components/commons/style/common.css";

import { Header } from "./components/elements/Header";
import { Footer } from "./components/elements/Footer";
// import { Home } from "./components/pages/Home";
import { Main } from "./components/elements/Main";

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <div className="wrapper">
        <Header />
        <Main />
        <Footer />
      </div>
    </RecoilRoot>
  );
};

export default App;
