const fonts: Array<string> = ["Light", "Regular", "Medium", "Semibold"];

const CalibreFont: Array<string> = [];
const SFMonoFont: Array<string> = [];

for (let i = 0; i < fonts.length; i++) {
  CalibreFont.push(`
      @font-face {
        font-family: 'Calibre-${fonts[i]}';
        src: url("/fonts/Calibre${fonts[i]}.otf");
        font-style: normal;
        font-display: swap;
      }
    `);
}

for (let i = 0; i < fonts.length; i++) {
  SFMonoFont.push(`
        @font-face {
          font-family: 'SFMono-${fonts[i]}';
          src: url("/fonts/SFMono${fonts[i]}.ttf");
          font-style: normal;
          font-display: swap;
        }
      `);
}

const links = ["About", "Experiences", "Work", "Contact", "Blog"];

export { CalibreFont, SFMonoFont, links };
