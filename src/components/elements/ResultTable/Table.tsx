import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import style from "./style.module.css";

import { GenderTypes } from "../../commons/types";
import Events from "../../commons/data/events.json";

import { TableIcon } from "./TableIcon";

export const Table: React.FC<{ gender: GenderTypes }> = ({ gender }) => {
  const events = [...Events.data];

  const filterdEvents = events.filter(
    (event) => event.gender === "common" || event.gender === gender
  );

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
              <span>
                <span>2022/3/20</span>
                <span className="red">（日）</span>
              </span>
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
