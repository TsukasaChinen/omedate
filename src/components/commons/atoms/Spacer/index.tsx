type Props = {
  visible?: boolean;
  width?: number;
  height?: number;
};

export const Spacer: React.FC<Props> = ({ visible, width, height }) => {
  const styles = {
    backgroundColor: visible ? "cyan" : "",
    marginInline: visible ? "calc(50% - 50vw)" : "",
    width: width ? width : "100%",
    height: height ? height : "",
    transition: "width .4s, height .4s",
  };

  return <div style={styles} />;
};
