import { useRecoilValue } from "recoil";

import { birthdayState, genderState, loadingState } from "../../config/keys";
import { Spacer } from "../../elements/Spacer";
import { Loading } from "../Loading";
import { Table } from "./Table";
import { TableShareButton } from "./TableShareButton";
import style from "./resultTable.module.css";

export const ResultTable: React.FC = () => {
  const isLoading = useRecoilValue(loadingState);
  const birthday = useRecoilValue(birthdayState);
  const gender = useRecoilValue(genderState);

  return (
    <>
      <Spacer height={{ s: isLoading ? 20 : 40, m: 50 }} />
      <Loading interVal={1000} />
      <div className={style.wrapper} data-show={isLoading}>
        <Table birthday={birthday} gender={gender} />
        <Spacer height={{ s: 0, m: 20 }} />
        <TableShareButton
          className={`${style.shareButton} ${gender === "male" ? "-blue" : ""}`}
        />
      </div>
    </>
  );
};
