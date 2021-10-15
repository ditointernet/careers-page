import styled from "styled-components";
import { COLORS, GRID } from "@ditointernet/uai-foundation";

import RemoteJob from "../public/images/remote-job.svg";
import Location from "../public/images/location.svg";

const Reasons = () => (
  <Section>
    <Title>Mais razões para trabalhar na Dito</Title>

    <SlideBlocks>
      <Block></Block>
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

const SlideBlocks = styled.div``;
const Block = styled.div``;

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
