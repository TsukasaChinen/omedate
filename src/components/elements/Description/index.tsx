import { QuiriesTypes } from "../../commons/types";
import { Spacer } from "../../commons/atoms/Spacer";
import { DefaultText } from "./DefaultText";
import { ResultText } from "./ResultText";

export const Description: React.FC<QuiriesTypes> = ({ queries }) => {
  return (
    <>
      <Spacer height={{ s: 20, m: 60 }} />
      {!queries.birthday && !queries.gender ? (
        <DefaultText />
      ) : (
        <ResultText queries={queries} />
      )}
    </>
  );
};
