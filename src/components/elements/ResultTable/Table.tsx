import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import style from "./style.module.css";

import CommonEvents from "../../commons/data/common.json";
import MaleEvents from "../../commons/data/male.json";
import FemaleEvents from "../../commons/data/female.json";

import {
  IconNoshi,
  IconTorii,
  IconKabuto,
  IconCake,
  IconTokkuri,
  IconSchoolBag,
  IconKimono01,
  IconKimono02,
  IconHoleCake,
  IconGakuran,
  IconGohan,
  IconSailor,
  IconHakama,
} from "../../commons/atoms/Icons";

type iconComponentsProps = {
  [key: string]: any;
};
const iconComponents: iconComponentsProps = {
  IconNoshi: IconNoshi,
  IconTorii: IconTorii,
  IconKabuto: IconKabuto,
  IconCake: IconCake,
  IconTokkuri: IconTokkuri,
  IconSchoolBag: IconSchoolBag,
  IconKimono01: IconKimono01,
  IconKimono02: IconKimono02,
  IconHoleCake: IconHoleCake,
  IconGakuran: IconGakuran,
  IconGohan: IconGohan,
  IconSailor: IconSailor,
  IconHakama: IconHakama,
};

export const Table: React.FC = () => {
  const events = [
    ...CommonEvents.events,
    ...MaleEvents.events,
    ...FemaleEvents.events,
  ];

  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th>お祝い事</th>
          <th>日　付</th>
          <th>説　明</th>
        </tr>
      </thead>
      {events.map((event, i) => (
        <tbody key={i}>
          <tr className={style.content}>
            <td className={style.nameTd}>
              <span className={style.nameInner}>
                <i className={style.nameIcon}>{event.icon}</i>
                <b className={style.name}>{event.name}</b>
              </span>
            </td>
            <td className={style.dateTd}>
              <span>
                <span>2022/3/20</span>
                <span className="red">（日）</span>
              </span>
            </td>
            <td className={style.descriptionTd}>{event.content}</td>
          </tr>
          <tr className={style.arrowTr}>
            <td>
              <FontAwesomeIcon icon={faCaretDown} />
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};
