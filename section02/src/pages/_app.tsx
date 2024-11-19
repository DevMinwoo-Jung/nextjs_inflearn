import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()

  const onClickEventButton = () => {
    router.push('/test')
  }

  useEffect(()=> {
    router.push('/test')
  }, [])

  return (
    <>
      <header>
        <Link href={'/'}>Index</Link>
        &nbsp;
        <Link href={'/search'}>Search</Link>
        &nbsp;
        <Link href={'/books/1'}>Books/1</Link>
      </header>
      <div>
        <button onClick={onClickEventButton}>TestPage로 이동</button>
      </div>
      <Component {...pageProps} />
    </>
  )
}
