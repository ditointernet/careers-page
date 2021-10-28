import Head from "next/head"
import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import { COLORS, GRID, TYPOGRAPHY } from "@ditointernet/uai-foundation";

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
  .w-500 { font-weight: ${TYPOGRAPHY.WEIGHTS.MEDIUM} }
  .w-600 { font-weight: ${TYPOGRAPHY.WEIGHTS.SEMI_BOLD} }
  .w-700 { font-weight: ${TYPOGRAPHY.WEIGHTS.BOLD} }

  h1,
  h3 {
    font-size: ${TYPOGRAPHY.FONT_SIZE.H1};
    line-height: ${TYPOGRAPHY.FONT_SIZE.H1};
  }

  h2 {
    font-size: ${GRID(4.5)};
    line-height: ${GRID(6.75)};
  }

  h4 {
    font-size: ${TYPOGRAPHY.FONT_SIZE.H2};
    line-height: ${TYPOGRAPHY.LINE_HEIGHT.H2};
  }

  h5 {
    font-size: ${TYPOGRAPHY.FONT_SIZE.H3};
    line-height: ${TYPOGRAPHY.LINE_HEIGHT.H3};
  }

  p {
    font-size: ${TYPOGRAPHY.FONT_SIZE.LARGE};
    line-height: ${TYPOGRAPHY.LINE_HEIGHT.LARGE};
  }

  .c-white { color: ${COLORS.WHITE} }
  .c-navy-dark { color: ${COLORS.NAVY_DARK} }
  .c-green-main { color: ${COLORS.GREEN_MAIN} }
  .c-gray-1 { color: ${COLORS.GRAY_1} }
  .c-gray-4 { color: ${COLORS.GRAY_4} }
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
    </>
  );
}
export default MyApp;
