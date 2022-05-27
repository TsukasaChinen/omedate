import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import {
  birthdayState,
  genderState,
  queryState,
  homeState,
  modalState,
} from "../../config/keys";
import { BirthdayTypes, GenderTypes } from "../../config/types";
import {
  joinDateHyphen,
  getToday,
  noScrollBodyAndHtml,
  validateBirthday,
  validateGender,
} from "../../utilities";
import { Error } from "../../parts/Error";
import { Description } from "../../parts/Description";
import { Setting } from "../../parts/Setting";
import { ResultTable } from "../../parts/ResultTable";
import { Modal } from "../../parts/Modal";

export const HomeMain: React.FC = () => {
  const [isError, setIsError] = useState<boolean>(false);

  const [isHome, setIsHome] = useRecoilState(homeState);

  const isModal = useRecoilValue(modalState);

  const [query, setQuery] = useRecoilState(queryState);
  const { birthday: qBirthday, gender: qGender } = query;

  const setBirthday = useSetRecoilState(birthdayState);

  const seGenderTypes = useSetRecoilState(genderState);

  useEffect(() => {
    const search = new URLSearchParams(window.location.search);

    if (!search.get("birthday") || !search.get("gender")) return;

    const getBirthday = search.get("birthday") as BirthdayTypes;
    const getGender = search.get("gender") as GenderTypes;

    if (!validateBirthday(getBirthday) || !validateGender(getGender)) {
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
    qGender ? seGenderTypes(qGender as GenderTypes) : seGenderTypes("male");
    qBirthday && qGender ? setIsHome(false) : setIsHome(true);
  }, [qBirthday, qGender, setBirthday, seGenderTypes, setIsHome]);

  useEffect(() => {
    if (isHome) return;
    noScrollBodyAndHtml(isModal);
  }, [isModal, isHome]);

  return (
    <main className="main">
      {isError ? (
        <Error />
      ) : (
        <>
          <Description />
          <Setting />
          {!isHome && (
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
