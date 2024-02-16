export default function Title({ children }: any) {
  return (
    <h1 className="title">
      {typeof children === "string" ? children.toUpperCase() : children}
    </h1>
  );
}
