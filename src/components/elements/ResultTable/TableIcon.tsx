import IconNoshi from "../../commons/media/iconNoshi.svg";
import IconTorii from "../../commons/media/iconTorii.svg";
import IconGohan from "../../commons/media/iconGohan.svg";
import IconCake from "../../commons/media/iconCake.svg";
import IconHoleCake from "../../commons/media/iconHoleCake.svg";
import IconAge03 from "../../commons/media/iconAge03.svg";
import IconAge05 from "../../commons/media/iconAge05.svg";
import IconAge07 from "../../commons/media/iconAge07.svg";
import IconSchoolBag from "../../commons/media/iconSchoolBag.svg";
import IconTokkuri from "../../commons/media/iconTokkuri.svg";
import IconKabuto from "../../commons/media/iconKabuto.svg";
import IconHina from "../../commons/media/iconHina.svg";
import IconGakuran from "../../commons/media/iconGakuran.svg";
import IconSailor from "../../commons/media/iconSailor.svg";

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
