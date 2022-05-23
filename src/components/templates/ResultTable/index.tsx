import { useRecoilValue } from "recoil";

import { genderState, loadingState } from "../../inits/keys";
import { Spacer } from "../../parts/Spacer";
import { Loading } from "../Loading";
import { Table } from "./Table";
import { TableShareButton } from "./TableShareButton";
import style from "./style.module.css";

export const ResultTable: React.FC = () => {
  const isLoading = useRecoilValue(loadingState);
  const gender = useRecoilValue(genderState);

  return (
    <>
      <Spacer height={{ s: isLoading ? 20 : 40, m: 50 }} />
      <Loading interVal={1000} />
      <div className={style.wrapper} data-show={isLoading}>
        <Table gender={gender} />
        <Spacer height={{ s: 0, m: 40 }} />
        <TableShareButton gender={gender} />
      </div>
    </>
  );
};
