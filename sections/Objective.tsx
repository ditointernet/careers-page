import type { NextPage } from "next";
import styled from "styled-components";
import { COLORS, GRID } from "@ditointernet/uai-foundation";

const Container = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 10vh 5vw;
  position: relative;
  width: 100vw;

  @media (max-width: 1024px) {
    height: fit-content;
  }

  @media (max-width: 500px) {
    padding: 2vh 5vw;
  }
`;

const Subtitle = styled.h3`
  color: #00bd6a;
  font-family: Poppins;
  font-size: ${GRID(2.75)};
  font-style: normal;
  font-weight: 600;
  line-height: ${GRID(1.125)};
  margin: 0px 0px 19px;
  @media (max-width: 500px) {
    font-size: ${GRID(2)};
    line-height: ${GRID(3)};
    margin-bottom: ${GRID(2)};
  }
`;

const Title = styled.h2`
  color: ${COLORS.NAVY_DARK};
  font-family: Poppins;
  font-size: ${GRID(4.5)};
  font-style: normal;
  font-weight: 700;
  line-height: ${GRID(6.75)};
  margin: 0px 0px 40px;
  width: ${GRID(75)};
  @media (max-width: 500px) {
    font-size: ${GRID(2.75)};
    line-height: ${GRID(4.125)};
    margin-bottom: ${GRID(3)};
    width: ${GRID(37.5)};
  }
`;

const Text = styled.p`
  color: ${COLORS.GRAY_4};
  font-size: ${GRID(2)};
  font-style: normal;
  font-weight: 500;
  line-height: ${GRID(3)};
  font-family: Poppins;
`;

const TextWrap = styled.div`
  width: ${GRID(65)};

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Frame = styled.img`
  height: ${GRID(58.5)};
  width: ${GRID(103.625)};
  position: absolute;
  bottom: ${GRID(25)};
  right: ${GRID(3.875)};

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    position: static;
  }
`;

const About: NextPage = () => (
  <Container>
    <Subtitle>Sabemos onde queremos chegar:</Subtitle>
    <Title>Ser a maior autoridade em CRM no Brasil com atuação global.</Title>
    <TextWrap>
      <Text>
        A plataforma Dito nasceu em 2008 para ajudar{" "}
        <strong>grandes marcas do varejo</strong> no relacionamento e
        gerenciamento de clientes e, assim, não pararem de vender.
      </Text>
      <Text>
        Com base em <strong>tecnologia e dados</strong>, criamos estratégias
        centradas nas pessoas para oferecer produtos cada vez mais inovadores e
        ajustados às necessidades do mercado.
      </Text>
      <Text>
        Em 2020, influenciamos mais de{" "}
        <strong>R$ 2.5 bilhões em receita de grandes marcas</strong> e estamos
        trabalhando para atingir uma ARR (Receita Anual Recorrente) superior a{" "}
        <strong>R$500 milhões</strong> até 2028.
      </Text>
      <Text>
        Se você também sabe onde quer chegar, vai ser incrível ter você com a
        gente.
      </Text>
    </TextWrap>
    <Frame
      src="/images/Frame-0.png"
      alt="figure of a man climbing up a graph"
    />
  </Container>
);

export default About;
