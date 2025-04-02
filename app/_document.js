import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Fonts for Bricolage Grotesque */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@200;400;700;900&display=swap" 
          rel="stylesheet" 
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
