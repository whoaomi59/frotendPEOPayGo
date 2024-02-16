export default function ConterDefaull({ children }: any) {
  return <div style={styles.conter}>{children}</div>;
}

const styles = {
  conter: {
    background: "#fff",
    padding: "5px",
    borderRadius: "5px",
  },
};
