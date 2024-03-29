import type { NextPage } from "next";
import styled from "styled-components";
import { COLORS_NEXT, GRID } from "@ditointernet/uai-foundation";

const About: NextPage = () => (
  <Section id="sobre-a-dito">
    <SectionWrapper>
      <TextWrap>
      <Subtitle>Sabemos onde queremos chegar:</Subtitle>
      <Title>Ser a maior autoridade em CRM no Brasil com atuação global.</Title>
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
          <strong>R$ 2,5 bilhões em receita de grandes marcas</strong> e estamos
          trabalhando para atingir uma ARR (Receita Anual Recorrente) superior a{" "}
          <strong>R$500 milhões</strong> até 2028.
        </Text>
        <Text>
          Se você também sabe onde quer chegar, vai ser incrível ter você com a
          gente.
        </Text>
      </TextWrap>
      <FrameWrap>
        <Frame
          alt="imagem de um homem andando sob um gráfico"
          src="/images/about.svg"
        />
      </FrameWrap>
    </SectionWrapper>
  </Section>
);

const Section = styled.section`
  margin: ${GRID(1)} 0;

  @media only screen and (min-width: 1024px) {
      margin: ${GRID(2)} 0;
  }
`

const SectionWrapper = styled.div`
  margin: 0 auto;
  padding: ${GRID(8)} ${GRID(2)};
  max-width: ${GRID(180)};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 1240px) {
    flex-direction: row;
  }
  
  @media only screen and (min-width: 1024px) {
      padding: ${GRID(10)} ${GRID(9)};
  }
`

const Subtitle = styled.h3`
  color: ${COLORS_NEXT.BRAND.GREEN_600};
  font-size: ${GRID(2.75)};
  font-weight: 600;
  height: ${GRID(4.125)};
  margin: 0px;
  @media (max-width: 768px) {
    font-size: ${GRID(2)};
    line-height: ${GRID(3)};
  }
`;

const Title = styled.h2`
  color: ${COLORS_NEXT.BRAND.NAVY_900};
  font-size: ${GRID(4.5)};
  font-weight: 700;
  line-height: ${GRID(6.75)};
  margin: ${GRID(2.375)} 0px ${GRID(3)};
  width: ${GRID(74.75)};
  @media (max-width: 768px) {
    font-size: ${GRID(2.75)};
    line-height: ${GRID(4.125)};
    margin: ${GRID(2)} 0px ${GRID(3)};
    width: 100%;
  }
`;

const Text = styled.p`
  color: ${COLORS_NEXT.NEUTRAL_400};
  font-size: ${GRID(2)};
  font-weight: 500;
  line-height: ${GRID(3)};
  margin-top: 0px;
  margin-bottom: ${GRID(3)};
  > strong {
    color: ${COLORS_NEXT.BRAND.NAVY_900};
  }
`;

const TextWrap = styled.div`
  margin: ${GRID(3)} 0px 0px;
  width: 100%;
  
  @media (min-width: 1240px) {
    margin: ${GRID(5)} 0px 0px;
    width: ${GRID(65)};
  }
`;

const FrameWrap = styled.div`
  align-self: center;

  @media (min-width: 1240px) {
    align-self: end;
  }
`;

const Frame = styled.img`
  width: 100%;
`;

export default About;
