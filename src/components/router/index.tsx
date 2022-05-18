import { Routes, Route } from "react-router-dom";
// import { Routes, Route, useLocation } from "react-router-dom";

import { Home } from "../pages/Home";
import { Result } from "../pages/Result";

export const Router: React.FC = () => {
  // const query = new URLSearchParams(useLocation().search);

  // const queries = {
  //   birthday: query.get("birthday"),
  //   gender: query.get("gender"),
  // };

  return (
    <Routes>
      <Route path={`/`} element={<Home />} />
      <Route path={`/result/`} element={<Result />} />
    </Routes>
  );
};
