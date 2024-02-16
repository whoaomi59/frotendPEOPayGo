import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body style={{ background: "#F0F2F5" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
