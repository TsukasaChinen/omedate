import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./components/commons/style/common.css";

import { Home } from "./components/pages/Home";

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
