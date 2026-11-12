import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-[#09090b] text-[#f4f4f5] antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
