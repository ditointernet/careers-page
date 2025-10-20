import { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import * as Sections from "../sections";

const Home: NextPage = () => (
  <main>
    {/* Google Tag Manager */}
    <Script id="google-analytics" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-52QG6W3');`}
    </Script>
    {/* End Google Tag Manager */}
    <Head>
      <title>Carreiras Dito: Vem ser FERA!</title>
    </Head>
    <Sections.Navbar />
    <Sections.Hero />
    <Sections.About />
    <Sections.Scale />
    <Sections.Tech />
    <Sections.Team />
    <Sections.Values />
    <Sections.Testimonials />
    <Sections.Areas />
    <Sections.Reasons />
    <Sections.Initiatives />
    <Sections.Benefits />
    <Sections.Screening />
    <Sections.Jobs />
    <Sections.Socials />
  </main>
);

export default Home;
