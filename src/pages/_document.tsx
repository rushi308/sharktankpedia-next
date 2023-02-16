import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Script>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7553767508353117"
          crossOrigin="anonymous"
        ></script>
      </Script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
