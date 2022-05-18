import useMedia from "use-media";

type Props = {
  visible?: boolean;
  height?: {
    s?: number;
    m?: number;
  };
};

export const Spacer: React.FC<Props> = ({ visible, height }) => {
  const isWide = useMedia({ minWidth: "768px" });

  const common = {
    backgroundColor: visible ? "cyan" : "",
    marginInline: visible ? "calc(50% - 50vw)" : "",
    width: "100%",
  };

  const heights = !isWide
    ? { height: height?.s ? height?.s : "" }
    : { height: height?.m ? height?.m : height?.s };

  const styles = { ...common, ...heights };

  return <div style={styles} />;
};
