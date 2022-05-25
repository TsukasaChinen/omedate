import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import {
  birthdayState,
  genderState,
  queryState,
  resultState,
  modalState,
} from "../../inits/keys";
import { GenderTypes } from "../../inits/types";
import { joinDateHyphen, getToday, noScrollBodyAndHtml } from "../../utilities";
import { Error } from "../../parts/Error";
import { Description } from "../../parts/Description";
import { Setting } from "../../parts/Setting";
import { ResultTable } from "../../parts/ResultTable";
import { Modal } from "../../parts/Modal";

export const HomeMain: React.FC = () => {
  const [isError, setIsError] = useState<boolean>(false);

  const [isResult, setIsResult] = useRecoilState(resultState);

  const isModal = useRecoilValue(modalState);

  const [query, setQuery] = useRecoilState(queryState);
  const { birthday: qBirthday, gender: qGender } = query;

  const setBirthday = useSetRecoilState(birthdayState);

  const setGender = useSetRecoilState(genderState);

  useEffect(() => {
    const search = new URLSearchParams(window.location.search);
    if (!search.get("birthday") && !search.get("gender")) return;

    const getBirthday = search.get("birthday");
    const getGender = search.get("gender");

    if (
      (getBirthday && getBirthday.length !== 8) ||
      isNaN(Number(getBirthday))
    ) {
      setIsError(true);
      return;
    }

    if (getGender !== "male" && getGender !== "female") {
      setIsError(true);
      return;
    }

    if (getBirthday !== qBirthday) {
      setQuery((prev) => {
        return {
          ...prev,
          birthday: getBirthday,
        };
      });
    }

    if (getGender !== qGender) {
      setQuery((prev) => {
        return {
          ...prev,
          gender: getGender,
        };
      });
    }
  }, [qBirthday, qGender, setQuery]);

  useEffect(() => {
    qBirthday
      ? setBirthday(joinDateHyphen(qBirthday))
      : setBirthday(getToday());
    qGender ? setGender(qGender as GenderTypes) : setGender("male");
    qBirthday && qGender ? setIsResult(true) : setIsResult(false);
  }, [qBirthday, qGender, setBirthday, setGender, setIsResult]);

  useEffect(() => {
    if (!isResult) return;
    noScrollBodyAndHtml(isModal);
  }, [isModal, isResult]);

  return (
    <main className="main">
      {isError ? (
        <Error />
      ) : (
        <>
          <Description />
          <Setting />
          {isResult && (
            <>
              <ResultTable />
              {isModal && <Modal />}
            </>
          )}
        </>
      )}
    </main>
  );
};
