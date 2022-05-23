import { RecoilRoot } from "recoil";

import { Home } from "./components/pages/Home";
import "./assets/css/common.css";

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <Home />
    </RecoilRoot>
  );
};

export default App;
