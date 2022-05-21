import { useRecoilValue } from "recoil";

import { queryState, loadingState } from "../../commons/keys";
import { Spacer } from "../../commons/atoms/Spacer";
import { Loading } from "../../elements/Loading";
import { Table } from "./Table";
import { TableShareButton } from "./TableShareButton";

export const ResultTable: React.FC = () => {
  const isLoading = useRecoilValue(loadingState);
  const queries = useRecoilValue(queryState);
  const gender = queries.gender;

  return (
    <>
      {isLoading ? (
        <>
          <Spacer height={{ s: 20 }} />
          <Loading interVal={1500} isLoading={isLoading} />
        </>
      ) : (
        <>
          <Spacer height={{ s: 40, m: 50 }} />
          <Table />
          <Spacer height={{ s: 0, m: 40 }} />
          <TableShareButton gender={gender} />
        </>
      )}
    </>
  );
};
