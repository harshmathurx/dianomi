import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Dianomi</title>
      </Head>
      <body className='bg-[#07050F] text-[#FAFAFA]'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
