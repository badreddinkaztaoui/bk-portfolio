import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
    --clr-black: #000000;
    --clr-white: #ffffff;
    --clr-dark: #0A192F
}

html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
      background-color: var(--clr-dark);
      color: var(--clr-white);
  }

`;
