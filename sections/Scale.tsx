import dynamic from "next/dynamic";
import styled from "styled-components";
import { COLORS, GRID } from "@ditointernet/uai-foundation";

const Brands = dynamic(() => import("../components/Brands"), {
  ssr: false,
});

const Scale = () => (
  <Section>
    <SectionWrapper>
      <Title>Mais de 200 marcas usam a plataforma Dito.</Title>

      <Brands />

      <Content>
        Impactamos mais ​​de <b>102 milhões de pessoas</b> consumidoras. E, anualmente, geramos:
      </Content>

      <Blocks>
        <Block minWidth={300}>
          <BlockTitle>R$ 2,5 bilhões</BlockTitle>
          <BlockContent>
            em receita influenciada
          </BlockContent>
        </Block>
        <Block minWidth={332}>
          <BlockTitle>+ 8,8 bilhões</BlockTitle>
          <BlockContent>de comportamentos mapeados anualmente</BlockContent>
        </Block>
        <Block minWidth={323}>
          <BlockTitle>+ 103 milhões</BlockTitle>
          <BlockContent>de contatos realizados por times de vendas</BlockContent>
        </Block>
        <Block minWidth={300}>
          <BlockTitle>+ 13 milhões</BlockTitle>
          <BlockContent>de campanhas recebidas</BlockContent>
        </Block>
      </Blocks>
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
  display: flex;
  padding: ${GRID(8)} ${GRID(2)};
  max-width: ${GRID(180)};
  flex-direction: column;
  align-items: center;
  
  @media only screen and (min-width: 1024px) {
    padding: ${GRID(10)} ${GRID(9)};
  }
`

const Title = styled.h2`
  color: ${COLORS.NAVY_DARK};
  font-size: ${GRID(4.5)};
  margin-bottom: ${GRID(12.5)};
  line-height: ${GRID(4.1)};
  
  @media (min-width: 768px) {
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: ${GRID(2.75)};
    text-align: left;
    margin-bottom: ${GRID(4)};
  }
`;

const Content = styled.p`
  color: ${COLORS.GRAY_4};
  margin: ${GRID(6.75)} auto;
  display: inline-block;
  font-size: ${GRID(2.75)};
  font-weight: 400;

  @media (max-width: 768px) {
    margin: ${GRID(5)} auto;
    font-size: ${GRID(2)};
  }

  b {
    font-weight: 700;
    color: ${COLORS.NAVY_DARK};
  }
`;

const Blocks = styled.div`
  gap: ${GRID(3)};
  display: grid;
  flex-wrap: wrap;
  justify-content: space-evenly;


  @media (min-width: 1024px) {
    gap: inherit;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const Block = styled.div<{ minWidth: number }>`
  width: 100%;
  display: inline-grid;
  padding: ${GRID(4.5)} ${GRID(4)};
  flex-direction: column;
  background-color: ${COLORS.WHITE};
  
  &:hover {
    box-shadow: 0 ${GRID(0.375)} ${GRID(2)} ${GRID(0.5)} rgba(0, 0, 0, 0.05);
    border-radius: ${GRID(3)};
  }

  @media (min-width: 1024px) {
    width: ${({ minWidth }) => GRID(minWidth / 8)};
  }
`;

const BlockTitle = styled.h3`
  color: ${COLORS.GREEN_MAIN};
  margin: 0 0 ${GRID(0.25)} 0;
  font-size: ${GRID(3.5)};
  font-weight: 700;
  line-height: ${GRID(5.25)};
`;

const BlockContent = styled.p`
  color: ${COLORS.NAVY_DARK};
  margin: 0;
  font-size: ${GRID(2.75)};
  font-weight: 700;
  line-height: ${GRID(4.125)};
`;

export default Scale;
