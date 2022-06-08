import type { AppProps } from "next/app";
// Global styles
import { GlobalStyles } from "../styles/GlobalStyles";
// Css reset
import "reset-css";
import CustomCursor from "src/helpers/CustomCursor";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <CustomCursor />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
