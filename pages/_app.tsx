import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import { GRID, TYPOGRAPHY } from "@ditointernet/uai-foundation";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: "Poppins", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a { color: inherit; text-decoration: none }
  * { box-sizing: border-box }

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
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
