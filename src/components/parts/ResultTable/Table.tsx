import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import { GenderTypes } from "../../config/types";
import { calcEventDate } from "../../utilities";

import { TableIcon } from "./TableIcon";
import Events from "../../../assets/data/events.json";
import style from "./resultTable.module.css";

type Props = {
  birthday: string;
  gender: GenderTypes;
};
export const Table: React.FC<Props> = ({ birthday, gender }) => {
  const events = [...Events.data];

  const filterdEvents = events.filter(
    (event) => event.gender === "common" || event.gender === gender
  );

  filterdEvents.forEach((obj, index, array) => {
    const values = Object.values(obj);
    const getDate = calcEventDate(birthday, gender, values[0]);
    if (getDate) {
      array[index]["date"] = getDate;
    }
  });

  // console.log(filterdEvents);
  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th>お祝い事</th>
          <th>日　付</th>
          <th>説　明</th>
        </tr>
      </thead>
      {filterdEvents.map((event) => (
        <tbody key={event.id}>
          <tr className={style.content}>
            <td className={style.nameTd}>
              <span className={style.nameInner}>
                <i className={style.nameIcon}>
                  <TableIcon
                    iconName={event.icon}
                    className={style[event.icon]}
                  />
                </i>
                <b className={style.name}>{event.name}</b>
              </span>
            </td>
            <td className={style.dateTd}>
              <span dangerouslySetInnerHTML={{ __html: event.date }} />
            </td>
            <td
              className={style.descriptionTd}
              dangerouslySetInnerHTML={{ __html: event.content }}
            ></td>
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
