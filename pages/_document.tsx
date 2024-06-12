import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Script src="assets/js/jquery-3.6.0.min.js" strategy="beforeInteractive"></Script>
      <Head />
      <body className="flex flex-col min-h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}