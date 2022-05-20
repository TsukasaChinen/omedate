import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./components/commons/style/common.css";

import { Header } from "./components/elements/Header";
import { Footer } from "./components/elements/Footer";
import { Home } from "./components/pages/Home";

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <div className="wrapper">
        <p className="fixed"></p>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path={`/`} element={<Home />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </RecoilRoot>
  );
};

export default App;
