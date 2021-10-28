import { NextPage } from "next";
import Head from "next/head";
import * as Sections from "../sections";

const Home: NextPage = () => (
  <main>
    <Head>
      <title>Carreiras | Dito</title>
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
