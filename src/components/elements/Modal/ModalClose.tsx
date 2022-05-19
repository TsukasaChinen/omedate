type Props = React.ComponentPropsWithoutRef<"button">;

export const ModalClose: React.FC<Props> = ({ className, onClick }) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      close
    </button>
  );
};
