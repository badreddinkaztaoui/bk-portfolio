import { createGlobalStyle } from "styled-components";

let fontFaces: Array<any> = [];
const fonts = ["Light", "Regular", "Medium", "Semibold", "Bold"];

for (let i = 0; i < fonts.length; i++) {
  fontFaces.push(`
    @font-face {
      font-family: 'Calibre-${fonts[i]}';
      src: url("/fonts/Calibre${fonts[i]}.otf");
      font-style: normal;
      font-weight: 400;
      font-display: swap;
    }
  `);
}

export const GlobalStyles = createGlobalStyle`

// Font faces 
${fontFaces}

:root {
    --clr-black: #000000;
    --clr-white: #ffffff;
    --clr-dark: #041C32;
    --clr-night: #04293A;
    --clr-blue: #064663;
    --clr-yellow: #ECB365;

    // Fonts
    --font-light: "Calibre-Light";
    --font-regular: "Calibre-Regular";
    --font-medium: "Calibre-Medium";
    --font-xbold: "Calibre-Semibold";
    --font-bold: "Calibre-Bold";
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
      font-family: var(--font-regular);
  }

`;
