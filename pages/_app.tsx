import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from "../lib/theme"
import "../styles/animate.css"
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <title>Ernest Armstrong McCulloch</title>
        <link href="/icon.svg" rel="icon"></link>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp

