import { useRecoilValue } from "recoil";

import style from "./style.module.css";

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
      <Spacer height={{ s: isLoading ? 20 : 40, m: 50 }} />
      <Loading interVal={1500} />
      <div className={style.wrapper} data-show={isLoading}>
        <Table />
        <Spacer height={{ s: 0, m: 40 }} />
        <TableShareButton gender={gender} />
      </div>
    </>
  );
};