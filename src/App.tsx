import { RecoilRoot } from "recoil";

import { Home } from "./components/pages/Home";
import "./assets/css/common.css";

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <div className="wrapper">
        <Home />
      </div>
    </RecoilRoot>
  );
};

export default App;
