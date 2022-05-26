import { useRecoilValue } from "recoil";

import { birthdayState } from "../../config/keys";

export const Calc: React.FC = () => {
  const birthday = useRecoilValue(birthdayState).split("-");
  let y, m, d;
  [y, m, d] = birthday;

  const oshichiya = new Date(Number(y), Number(m), Number(d) - 1 + 7);
  console.log(
    `${oshichiya.getFullYear()}年${oshichiya.getMonth()}月${oshichiya.getDate()}日`
  );

  const omiyamairi = new Date(Number(y), Number(m), Number(d) - 1 + 31);
  console.log(
    `${omiyamairi.getFullYear()}年${omiyamairi.getMonth()}月${omiyamairi.getDate()}日`
  );

  return (
    <div>
      <p>Calc</p>
    </div>
  );
};
