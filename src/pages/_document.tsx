import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        // @ts-ignore
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const fonts = ["Light", "Regular", "Medium", "Semibold"];

    return (
      <Html lang="en">
        <Head>
          {fonts.map((font) => (
            <link
              key={font}
              rel="preload"
              href={`/fonts/Calibre${font}.otf`}
              as="font"
              crossOrigin=""
            />
          ))}
          {fonts.map((font) => (
            <link
              key={font}
              rel="preload"
              href={`/fonts/SFMono${font}.ttf`}
              as="font"
              crossOrigin=""
            />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
