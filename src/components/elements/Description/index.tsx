import style from "./style.module.css";

import { Spacer } from "../../commons/atoms/Spacer";
import { DefaultText } from "./DefaultText";
import { ResultText } from "./ResultText";

export const Description: React.FC<{ isResult: boolean }> = ({ isResult }) => {
  return (
    <>
      <Spacer height={{ s: 20, m: 60 }} />
      {!isResult ? (
        <DefaultText className={style.description} />
      ) : (
        <ResultText className={style.description} />
      )}
    </>
  );
};
