import NavBar from "./navbar";

export default function Layout(props: any) {
  return <NavBar>{props.children}</NavBar>;
}
