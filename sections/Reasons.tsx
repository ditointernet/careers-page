import styled from "styled-components";
import { COLORS, GRID } from "@ditointernet/uai-foundation";

import RemoteJob from "../public/images/remote-job.svg";
import Location from "../public/images/location.svg";

const reasonsBlocks = [
  {
    image: "/images/gptw.jpg",
    text: "Desde 2017, estamos entre as melhores empresas para trabalhar (GPTW).",
  },
  {
    image: "/images/time.svg",
    text: "Time formado por mais de 100 FERAS de todo o Brasil.",
  },
  {
    image: "/images/flex-worksheet.svg",
    text: "Horários flexíveis de verdade, sem essa de bater ponto por aqui.",
  },
  {
    image: "/images/career-map.svg",
    text: "Ajudamos a desenvolver seu mapa de carreira para você seguir crescendo.",
  },
  {
    image: "/images/coop.svg",
    text: "Espírito colaborativo. Aqui não tem concorrência, tem parceria.",
  },
  {
    image: "/images/performance.svg",
    text: "Realizamos ciclos de performance periódicos.",
  },
];

const Reasons = () => (
  <Section>
    <Title>Mais razões para trabalhar na Dito</Title>

    <SlideBlocks>
      {reasonsBlocks.map((block) => (
        <Block>
          <img src={block.image} />
          <p>{block.text}</p>
        </Block>
      ))}
    </SlideBlocks>

    <Content>
      <Columns>
        <Column>
          <RemoteJob />
        </Column>
        <Column>
          <h3>Trabalho remoto como padrão</h3>
          <p>
            Você pode trabalhar de <b>qualquer lugar do país</b> e aproveitar
            toda a flexibilidade desse modelo para ter mais{" "}
            <b>qualidade de vida.</b> É você quem escolhe se prefere viver na
            praia, no campo, no interior, onde for.
          </p>
        </Column>
      </Columns>

      <Columns>
        <Column>
          <Location />
        </Column>
        <Column>
          <h3>Sede localizada no coração da Savassi</h3>
          <p>
            Caso prefira o trabalho presencial, você pode optar por trabalhar na
            nossa sede, em <b>Belo Horizonte.</b>
          </p>
        </Column>
      </Columns>
    </Content>
  </Section>
);

const Section = styled.h2`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  color: ${COLORS.NAVY_DARK};
  font-size: ${GRID(4.5)};
  margin-bottom: ${GRID(12.5)};
  line-height: ${GRID(4.1)};
  padding: 0 ${GRID(9)};

  @media (max-width: 768px) {
    font-size: ${GRID(2.75)};
    padding: 0 ${GRID(2)};
    margin-bottom: ${GRID(4)};
  }
`;

const SlideBlocks = styled.div`
  display: flex;
  overflow-x: scroll;
  flex-wrap: nowrap;
  margin-left: ${GRID(9)};
`;
const Block = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${GRID(4)};
  width: ${GRID(47.5)};
  border-radius: ${GRID(2)};

  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
  }

  img {
    margin-bottom: ${GRID(4)};
    width: ${GRID(12)};
    height: auto;
  }

  p {
    color: ${COLORS.GRAY_4};
    font-size: ${GRID(2)};
    font-weight: normal;
  }
`;

const Columns = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: ${GRID(123)};
`;

const Content = styled.div`
  ${Columns} ~ ${Columns} {
    margin-top: ${GRID(17)};
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:last-child {
    flex: 1;
    margin-left: ${GRID(12)};
    width: max-content;
  }

  h3 {
    color: ${COLORS.NAVY_DARK};
    font-size: ${GRID(3.5)};
    font-weight: 600;
    margin: 0 0 ${GRID(3)} 0;
  }

  p {
    color: ${COLORS.GRAY_4};
    font-size: ${GRID(2)};
    font-weight: normal;
    line-height: 1.4;

    b {
      color: ${COLORS.NAVY_DARK};
      font-weight: bold;
    }
  }
`;

export default Reasons;
