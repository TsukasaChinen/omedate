import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

type Props = React.ComponentPropsWithoutRef<"button">;

export const CloseButton: React.FC<Props> = ({ className, onClick }) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      <FontAwesomeIcon icon={faCircleXmark} />
    </button>
  );
};
