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
        Impactamos mais ​​de <b>102 milhões de pessoas</b> consumidoras. E
        anualmente geramos:
      </Content>

      <Blocks>
        <Block>
          <BlockTitle>R$ 2.5 bilhões</BlockTitle>
          <BlockContent>
            Em receita <br />
            influenciada
          </BlockContent>
        </Block>

        <Block>
          <BlockTitle>+ 8.8 bilhões</BlockTitle>
          <BlockContent>De comportamentos mapeados anualmente</BlockContent>
        </Block>

        <Block>
          <BlockTitle>+ 103 milhões</BlockTitle>
          <BlockContent>De contatos realizados por times de vendas</BlockContent>
        </Block>

        <Block>
          <BlockTitle>+ 13 milhões</BlockTitle>
          <BlockContent>De campanhas recebidas</BlockContent>
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

const SectionWrapper = styled.section`
  margin: 0 auto;
  display: flex;
  padding: ${GRID(8)} ${GRID(2)};
  max-width: ${GRID(180)};
  flex-direction: column;
  
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
  font-size: ${GRID(2.75)};
  color: ${COLORS.GRAY_4};
  margin: 54px auto;
  display: inline-block;
  font-weight: 400;

  @media (max-width: 768px) {
    margin: 40px auto;
    font-size: ${GRID(2)};
  }

  b {
    font-weight: bold;
    color: ${COLORS.NAVY_DARK};
  }
`;

const Blocks = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: ${GRID(160)};
  gap: ${GRID(3)};

  @media (min-width: 768px) {
    gap: ${GRID(1.5)};
  }
`;

const Block = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex: 1;
  align-self: stretch;
  background: ${COLORS.WHITE};
  padding: ${GRID(4.5)} ${GRID(4)};
  min-width: 300px;

  &:hover {
    box-shadow: 0 ${GRID(0.375)} ${GRID(2)} ${GRID(0.5)} rgba(0, 0, 0, 0.05);
    border-radius: ${GRID(3)};
  }
`;

const BlockTitle = styled.h3`
  font-size: ${GRID(3.5)};
  color: ${COLORS.GREEN_MAIN};
  padding: 0;
  margin: 0 0 ${GRID(1.5)} 0;
`;

const BlockContent = styled.p`
  font-size: ${GRID(2.5)};
  color: ${COLORS.NAVY_DARK};
  padding: 0;
  margin: 0;
`;

export default Scale;
