import useMedia from "use-media";

import style from "./style.module.css";

import { Spacer } from "../../commons/atoms/Spacer";
import { DefaultText } from "./DefaultText";
// import { ResultText } from "./ResultText";

export const Description: React.FC = () => {
  const isWide = useMedia({ minWidth: "768px" });

  return (
    <div className={style.description}>
      <Spacer height={isWide ? 40 : 20} />
      <DefaultText />
      {/* <ResultText gender="female" year={2022} month={3} day={14} /> */}
    </div>
  );
};
