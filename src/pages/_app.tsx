import "@/styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"
import logo from "../../public/logo.png"
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Admin</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
