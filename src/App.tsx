import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";

import "./components/commons/style/common.css";

// import { Home } from "./components/pages/Home";
// import { Result } from "./components/pages/Result";
import { Router } from "./components/router/";
import { Header } from "./components/elements/Header";
import { Footer } from "./components/elements/Footer";

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <div className="wrapper">
        <Header />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <Footer />
      </div>
    </RecoilRoot>
  );
};

export default App;
