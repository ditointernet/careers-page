import type { NextPage } from "next";
import Image from "next/image";
import Frame from "../assets/images/Frame.png";
import Logo from "../assets/images/Logo.png";
import ChevronDown from "../assets/images/chevron-down.png";
import styles from "../styles/About.module.css";

const About: NextPage = () => (
  <div className={styles.container}>
    <div className={styles.logoWrap}>
      <Image alt="Dito logomark" src={Logo} />
    </div>
    <h2 className={styles.subtitle}>
      Nossa paixão por tecnologia está revolucionando o varejo.
    </h2>
    <h1 className={styles.title}>Vem com a gente!</h1>
    <div className={styles.linkWrap}>
      <a className={styles.link} href="" target="_blank">
        Ver nossas vagas
      </a>
    </div>
    <div className={styles.frameWrap}>
      <Image src={Frame} alt="Picture of people looking for a computer" />
    </div>
    <footer className={styles.footer}>
      <Image src={ChevronDown} alt="" />
      <p className={styles.info}>
        Deslize a página para descobrir mais sobre a Dito
      </p>
    </footer>
  </div>
);

export default About;
