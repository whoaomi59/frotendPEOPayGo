import "@/public/styles/styles.css";
import type { AppProps } from "next/app";

import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrimeReactProvider>
      <Component {...pageProps} />
    </PrimeReactProvider>
  );
}
