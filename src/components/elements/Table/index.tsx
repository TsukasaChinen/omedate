import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import style from "./style.module.css";

import { Spacer } from "../../commons/atoms/Spacer";
import { TableShareButton } from "./TableShareButton";
import { IconNoshi, IconTorii, IconKabuto } from "../../commons/atoms/Icons";

export const Table: React.FC = () => {
  return (
    <>
      <Spacer height={{ s: 40 }} />
      <table className={style.table}>
        <thead>
          <tr>
            <th>お祝い事</th>
            <th>日　付</th>
            <th>説　明</th>
          </tr>
        </thead>
        <tbody>
          <tr className={style.content}>
            <td className={style.nameTd}>
              <span className={style.nameInner}>
                <i className={style.nameIcon}>
                  <IconNoshi className={style.iconNoshi} />
                </i>
                <b className={style.name}>
                  お七夜<span className={style.kana}>（オシチヤ）</span>
                </b>
              </span>
            </td>
            <td className={style.dateTd}>
              <span>
                <span>2022/3/20</span>
                <span className="red">（日）</span>
              </span>
            </td>
            <td className={style.descriptionTd}>
              生まれて7日目のお祝い。赤ちゃんの名前を決め、お披露目する「命名式」を行ないます。
            </td>
          </tr>
          <tr className={style.arrowTr}>
            <td>
              <FontAwesomeIcon icon={faCaretDown} />
            </td>
          </tr>
          <tr className={style.content}>
            <td className={style.nameTd}>
              <span className={style.nameInner}>
                <i className={style.nameIcon}>
                  <IconTorii className={style.IconTorii} />
                </i>
                <b className={style.name}>
                  お宮参り<span className={style.kana}>（オミヤマイリ）</span>
                </b>
              </span>
            </td>
            <td className={style.dateTd}>
              <span>
                <span>2022/4/14</span>
                <span className="blue">（土）</span>
              </span>
            </td>
            <td className={style.descriptionTd}>
              自分の生まれた土地の守り神に、初めてお参りすること。
            </td>
          </tr>
          <tr className={style.arrowTr}>
            <td>
              <FontAwesomeIcon icon={faCaretDown} />
            </td>
          </tr>
          <tr className={style.content}>
            <td className={style.nameTd}>
              <span className={style.nameInner}>
                <i className={style.nameIcon}>
                  <IconKabuto className={style.iconKabuto} />
                </i>
                <b className={style.name}>
                  端午の節句
                  <span className={style.kana}>（タンゴノセック）</span>
                </b>
              </span>
            </td>
            <td className={style.dateTd}>
              <span>
                <span>2022/5/5</span>
                <span>（水）</span>
              </span>
            </td>
            <td className={style.descriptionTd}>
              男の子は5月5日の端午の節句を祝います。
              <br />
              無病息災と出世の願いを込めて、鯉のぼり。
            </td>
          </tr>
        </tbody>
      </table>
      <Spacer height={{ s: 40 }} />
      <TableShareButton />
    </>
  );
};
