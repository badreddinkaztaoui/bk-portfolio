import type { AppProps } from "next/app";
// Global styles
import { GlobalStyles } from "../styles/GlobalStyles";
// Css reset
import "reset-css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
