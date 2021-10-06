import type { NextPage } from "next";
import Image from "next/image";
import Frame from "../assets/images/Frame-0.png";
import styles from "../styles/About.module.css";

const About: NextPage = () => (
  <div className={styles.container}>
    <h3 className={styles.subtitle}>Sabemos onde queremos chegar:</h3>
    <h2 className={styles.title}>
      Ser a maior autoridade em CRM no Brasil com atuação global.
    </h2>
    <div className={styles.textWrap}>
      <p className={styles.text}>
        A plataforma Dito nasceu em 2008 para ajudar{" "}
        <strong>grandes marcas do varejo</strong> no relacionamento e
        gerenciamento de clientes e, assim, não pararem de vender.
      </p>
      <p className={styles.text}>
        Com base em <strong>tecnologia e dados</strong>, criamos estratégias
        centradas nas pessoas para oferecer produtos cada vez mais inovadores e
        ajustados às necessidades do mercado.
      </p>
      <p className={styles.text}>
        Em 2020, influenciamos mais de{" "}
        <strong>R$ 2.5 bilhões em receita de grandes marcas</strong> e estamos
        trabalhando para atingir uma ARR (Receita Anual Recorrente) superior a{" "}
        <strong>R$500 milhões</strong> até 2028.
      </p>
      <p className={styles.text}>
        Se você também sabe onde quer chegar, vai ser incrível ter você com a
        gente.
      </p>
    </div>

    <div className={styles.frameWrap}>
      <Image src={Frame} alt="figure of a man climbing up a graph" />
    </div>
  </div>
);

export default About;
