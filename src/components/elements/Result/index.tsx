import { useRecoilValue } from "recoil";

import { queryState } from "../../commons/keys";
import { Spacer } from "../../commons/atoms/Spacer";
import { Table } from "./Table";
import { TableShareButton } from "./TableShareButton";

export const Result: React.FC = () => {
  const queries = useRecoilValue(queryState);
  const gender = queries.gender;

  return (
    <>
      <Spacer height={{ s: 40, m: 50 }} />
      <Table />
      <Spacer height={{ s: 0, m: 40 }} />
      <TableShareButton gender={gender} />
    </>
  );
};
