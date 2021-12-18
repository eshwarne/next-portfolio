import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.documentElement.lang = "en";
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
