import { useRecoilValue } from "recoil";

import { homeState } from "../../config/keys";

import { Spacer } from "../../elements/Spacer";
import { DefaultText } from "./DefaultText";
import { ResultText } from "./ResultText";
import style from "./description.module.css";

export const Description: React.FC = () => {
  const isHome = useRecoilValue(homeState);

  return (
    <>
      <Spacer height={{ s: 20, m: 60 }} />
      {isHome ? (
        <DefaultText className={style.wrapper} />
      ) : (
        <ResultText className={style.wrapper} />
      )}
    </>
  );
};
