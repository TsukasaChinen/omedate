import IconNoshi from "../../../assets/media/iconNoshi.svg";
import IconTorii from "../../../assets/media/iconTorii.svg";
import IconGohan from "../../../assets/media/iconGohan.svg";
import IconCake from "../../../assets/media/iconCake.svg";
import IconHoleCake from "../../../assets/media/iconHoleCake.svg";
import IconAge03 from "../../../assets/media/iconAge03.svg";
import IconAge05 from "../../../assets/media/iconAge05.svg";
import IconAge07 from "../../../assets/media/iconAge07.svg";
import IconSchoolBag from "../../../assets/media/iconSchoolBag.svg";
import IconTokkuri from "../../../assets/media/iconTokkuri.svg";
import IconKabuto from "../../../assets/media/iconKabuto.svg";
import IconHina from "../../../assets/media/iconHina.svg";
import IconGakuran from "../../../assets/media/iconGakuran.svg";
import IconSailor from "../../../assets/media/iconSailor.svg";

export const TableIcon: React.FC<{ iconName: string; className?: string }> = ({
  iconName,
  className,
}) => {
  const icons = new Map([
    ["iconNoshi", IconNoshi],
    ["iconTorii", IconTorii],
    ["iconGohan", IconGohan],
    ["iconCake", IconCake],
    ["iconHoleCake", IconHoleCake],
    ["iconAge03", IconAge03],
    ["iconAge05", IconAge05],
    ["iconAge07", IconAge07],
    ["iconSchoolBag", IconSchoolBag],
    ["iconTokkuri", IconTokkuri],
    ["iconKabuto", IconKabuto],
    ["iconHina", IconHina],
    ["iconGakuran", IconGakuran],
    ["iconSailor", IconSailor],
  ]);

  return (
    <>
      {icons.has(iconName) ? (
        <img src={icons.get(iconName)} className={className} alt={iconName} />
      ) : null}
    </>
  );
};
