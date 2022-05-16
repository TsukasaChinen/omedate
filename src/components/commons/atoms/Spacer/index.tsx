type Props = {
  hidden?: boolean;
  width?: number;
  height?: number;
};

export const Spacer: React.FC<Props> = ({ hidden, width, height }) => {
  const styles = {
    backgroundColor: hidden ? "" : "cyan",
    marginInline: hidden ? "" : "calc(50% - 50vw)",
    width: width ? width : "",
    height: height ? height : "",
    transition: "width .4s, height .4s",
  };

  return <div style={styles} />;
};
