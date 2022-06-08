import { createGlobalStyle } from "styled-components";
import { CalibreFont, SFMonoFont } from "@/data/consts";

export const GlobalStyles = createGlobalStyle`

// Font faces 
${CalibreFont}
${SFMonoFont}

:root {
  // Colors
  --clr-primary: #2F8F9D;
  --clr-secondary: #205375;
  --clr-bg: #F9FFEB;
  --clr-black: #000000;
  --clr-white: #ffffff;
  --clr-light: #06283D;
  --clr-dark: #4B5D67;
  --clr-yellow: #ECB365;

  // Status
  --clr-status-primary: #2F8F9D;
  --clr-status-error: #FA1451;
  --clr-status-warning: #FAE52C;
  --clr-status-success: #1DFA46;


  // Font family
  --calibre-light: "Calibre-Light";
  --calibre-regular: "Calibre-Regular";
  --calibre-medium: "Calibre-Medium";
  --calibre-bold: "Calibre-Semibold";
  --sfmono-light: "SFMono-Light";
  --sfmono-regular: "SFMono-Regular";
  --sfmono-medium: "SFMono-Medium";
  --sfmono-bold: "SFMono-Semibold";

  // Transitions
  --easing: cubic-bezier(0.645,0.045,0.355,1);
  --transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);

  // Other
  --border-radius: 4px;
  --nav-height: 100px;
  --nav-scroll-height: 70px;
  --tab-height: 42px;
  --tab-width: 120px;
}

html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    cursor: none;
    
  }

  body {
      color: var(--clr-white);
      font-family: var(--calibre-regular);
      background-color: var(--clr-bg);
      line-height: 1.3;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

`;
