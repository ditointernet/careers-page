import type { NextPage } from "next";
import Head from "next/head";

import * as Sections from "../sections";

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Carreiras | Dito</title>
        <meta
          name="description"
          content="Nossa paixão por tecnologia está revolucionando o varejo. Vem com a gente!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sections.Navbar />
      <Sections.Hero />
      <Sections.Objective />
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
      <Sections.Connect />
    </main>
  );
};

export default Home;
