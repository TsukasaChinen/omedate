import style from "./style.module.css";

import { Spacer } from "../../commons/atoms/Spacer";
import { DefaultText } from "./DefaultText";
// import { ResultText } from "./ResultText";

export const Description: React.FC = () => {
  return (
    <div className={style.description}>
      <Spacer height={{ s: 20, m: 60 }} />
      <DefaultText />
      {/* <ResultText gender="female" year={2022} month={3} day={14} /> */}
    </div>
  );
};
