import { Description } from "../../elements/Description";
import { BirthdayAndGender } from "../../elements/BirthdayAndGender";
import { Buttons } from "../../elements/Buttons";

export const Home: React.FC = () => {
  return (
    <main className="main">
      <Description />
      <BirthdayAndGender />
      <Buttons />
    </main>
  );
};
