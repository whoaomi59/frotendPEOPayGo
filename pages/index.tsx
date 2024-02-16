import { Inter } from "next/font/google";
import Nabvar from "./components/navbar";
import Dashboard from "./dashboard/Dashboard";
import Layout from "./components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
}
