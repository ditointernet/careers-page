import type { NextPage } from "next";
import styled from "styled-components";
import { COLORS, GRID } from "@ditointernet/uai-foundation";

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
      src="/images/frame-0.png"
      alt="imagem de um homem andando sob um gráfico"
    />
  </Container>
);

const Container = styled.section`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  padding: 10vh 5vw;
  position: relative;
  width: 100vw;

  @media (max-width: 1024px) {
    height: fit-content;
  }

  @media (max-width: 768px) {
    padding: ${GRID(15)} 5vw 2vh 5vw;
  }
`;

const Subtitle = styled.h3`
  color: ${COLORS.GREEN_MAIN};
  font-size: ${GRID(2.75)};
  font-weight: 600;
  line-height: ${GRID(1.125)};
  margin: 0px 0px ${GRID(2.375)};
  @media (max-width: 768px) {
    font-size: ${GRID(2)};
    line-height: ${GRID(3)};
    margin-bottom: ${GRID(2)};
  }
`;

const Title = styled.h2`
  color: ${COLORS.NAVY_DARK};
  font-size: ${GRID(4.5)};
  font-weight: 700;
  line-height: ${GRID(6.75)};
  margin: 0px 0px ${GRID(5)};
  max-width: 42vw;

  @media (max-width: 768px) {
    max-width: 100vw;
    font-size: ${GRID(2.75)};
    line-height: ${GRID(4.125)};
    margin-bottom: ${GRID(3)};
    width: ${GRID(42.87)};
  }
`;

const Text = styled.p`
  color: ${COLORS.GRAY_4};
  font-size: ${GRID(2)};
  font-weight: 500;
  line-height: ${GRID(3)};

  > strong {
    color: ${COLORS.NAVY_DARK};
  }
`;

const TextWrap = styled.div`
  width: ${GRID(65)};
  margin-bottom: ${GRID(30)};

  @media (max-width: 1024px) {
    margin-bottom: ${GRID(0)};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Frame = styled.img`
  bottom: 12%;
  position: absolute;
  right: ${GRID(2)};
  width: 60%;

  @media (max-width: 1024px) {
    height: auto;
    position: static;
    width: 100%;
  }
`;

export default About;
