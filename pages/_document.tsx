import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

class CustomDocument extends Document {
  static async getInitialProps(context: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = context.renderPage;

    try {
      context.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(context);

      return {
        ...initialProps,
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
    const meta = {
      url: "https://carreiras.dito.com.br",
      title:
        "Carreiras Dito - Nossa paixão por tecnologia está revolucionando o varejo. Vem com a gente!",
      description:
        "Por aqui, você vai encontrar vários desafios, além de muita parceria e espírito colaborativo. Porque entendemos que, crescendo juntos, podemos ir muito mais longe.",
      image: "https://carreiras.dito.com.br/images/dito-empresa-banner.jpg",
      keywords: "dito, empresa, tecnologia, varejo",
    };

    return (
      <Html>
        <Head>
          <meta property="og:title" content={meta.title} />
          <meta name="description" content={meta.description} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:url" content={meta.url} />
          <meta property="og:image" content={meta.image} />
          <meta name="keywords" content={meta.keywords} />

          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          {/* Google Tag Manager (noscript) */}
          <noscript dangerouslySetInnerHTML={{
            __html: "<iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-52QG6W3\" height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe>"
          }}></noscript>
          {/* End Google Tag Manager (noscript) */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
