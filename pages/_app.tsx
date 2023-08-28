import Head from "next/head";
import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import { COLORS_NEXT, GRID, TYPOGRAPHY } from "@ditointernet/uai-foundation";
import Script from "next/script";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  html, body, button {
    font-family: "Poppins", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a { color: inherit; text-decoration: none }
  * { box-sizing: border-box; margin: 0; padding: 0 }

  .w-400 { font-weight: 400 }
  .w-500 { font-weight: ${TYPOGRAPHY.FontWeight.MEDIUM} }
  .w-600 { font-weight: ${TYPOGRAPHY.FontWeight.SEMI_BOLD} }
  .w-700 { font-weight: 900 }

  h1,
  h3 {
    font-size: ${TYPOGRAPHY.FontSize.H1};
    line-height: ${TYPOGRAPHY.FontSize.H1};
  }

  h2 {
    font-size: ${GRID(4.5)};
    line-height: ${GRID(6.75)};
  }

  h4 {
    font-size: ${TYPOGRAPHY.FontSize.H2};
    line-height: ${TYPOGRAPHY.LineHeight.H2};
  }

  h5 {
    font-size: ${TYPOGRAPHY.FontSize.H3};
    line-height: ${TYPOGRAPHY.LineHeight.H3};
  }

  p {
    font-size: ${TYPOGRAPHY.FontSize.LARGE};
    line-height: ${TYPOGRAPHY.LineHeight.LARGE};
  }

  .c-white { color: ${COLORS_NEXT.WHITE} }
  .c-navy-dark { color: ${COLORS_NEXT.BRAND.NAVY_900} }
  .c-green-main { color: ${COLORS_NEXT.BRAND.GREEN_600} }
  .c-gray-1 { color: ${COLORS_NEXT.NEUTRAL_100} }
  .c-gray-4 { color: ${COLORS_NEXT.NEUTRAL_400} }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
      {/* @ts-ignore */}
      <div vw="true" className="enabled">
        <div vw-access-button="true" className="active"></div>
        <div vw-plugin-wrapper="true">
          <div className="vw-plugin-top-wrapper"></div>
        </div>
      </div>
      <Script strategy="beforeInteractive" src="https://vlibras.gov.br/app/vlibras-plugin.js"></Script>
      <Script id="init-vlibras">{"new window.VLibras.Widget(\"https://vlibras.gov.br/app\");"}</Script>
    </>
  );
}
export default MyApp;
