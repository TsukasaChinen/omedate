import { useRecoilValue } from "recoil";

import { queryState } from "../../commons/keys";

import { Spacer } from "../../commons/atoms/Spacer";
import { DefaultText } from "./DefaultText";
import { ResultText } from "./ResultText";

export const Description: React.FC = () => {
  const queries = useRecoilValue(queryState);

  return (
    <>
      <Spacer height={{ s: 20, m: 60 }} />
      {!queries.birthday && !queries.gender ? <DefaultText /> : <ResultText />}
    </>
  );
};
