import { useRecoilValue } from "recoil";

import style from "./style.module.css";

import { queryState } from "../../commons/keys";

import { Spacer } from "../../commons/atoms/Spacer";
import { DefaultText } from "./DefaultText";
import { ResultText } from "./ResultText";

export const Description: React.FC = () => {
  const queries = useRecoilValue(queryState);

  return (
    <>
      <Spacer height={{ s: 20, m: 60 }} />
      {!queries.birthday && !queries.gender ? (
        <DefaultText className={style.description} />
      ) : (
        <ResultText className={style.description} queries={queries} />
      )}
    </>
  );
};
