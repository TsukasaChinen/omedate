import useMedia from "use-media";

import style from "./style.module.css";

import { Spacer } from "../../commons/atoms/Spacer";
import { InputDates } from "../../commons/molecules/InputDates";

export const BirthdayAndGender: React.FC = () => {
  const isWide = useMedia({ minWidth: "768px" });

  return (
    <div className={style.wrapper}>
      <Spacer height={isWide ? 40 : 20} hidden={true} />
      <InputDates text="生年月日" />
      <Spacer height={20} hidden={true} />
      <label>
        <span>性　　別</span>
        <select>
          <option value="male">男の子</option>
          <option value="female">女の子</option>
        </select>
      </label>
    </div>
  );
};
