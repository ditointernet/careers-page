import dynamic from "next/dynamic";
import styled from "styled-components";
import { COLORS, GRID } from "@ditointernet/uai-foundation";

const Brands = dynamic(() => import("../../components/Brands"), {
  ssr: false,
});

const Scale = () => (
  <Section>
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
  </Section>
);

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  color: ${COLORS.NAVY_DARK};
  font-size: ${GRID(4.5)};
  margin-bottom: ${GRID(12.5)};
  line-height: ${GRID(4.1)};

  @media (max-width: 768px) {
    font-size: ${GRID(2.75)};
    padding: 0 ${GRID(2)};
    text-align: left;
    margin-bottom: ${GRID(4)};
  }
`;

const Content = styled.p`
  font-size: ${GRID(2.75)};
  color: ${COLORS.GRAY_4};
  margin: 0 auto;
  display: inline-block;
  padding: ${GRID(17.5)} 0 ${GRID(7.5)} 0;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: ${GRID(2)};
    padding: 0 ${GRID(2)};
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
  gap: 0 ${GRID(1)};
`;

const Block = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex: 1;
  align-self: stretch;
  background: ${COLORS.WHITE};
  padding: ${GRID(4)};

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
