import { useRecoilValue } from "recoil";

import { resultState } from "../../inits/keys";

import { Spacer } from "../../elements/Spacer";
import { DefaultText } from "./DefaultText";
import { ResultText } from "./ResultText";
import style from "./description.module.css";

export const Description: React.FC = () => {
  const isResult = useRecoilValue(resultState);

  return (
    <>
      <Spacer height={{ s: 20, m: 60 }} />
      {!isResult ? (
        <DefaultText className={style.wrapper} />
      ) : (
        <ResultText className={style.wrapper} />
      )}
    </>
  );
};
