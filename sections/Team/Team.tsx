import { COLORS, GRID } from "@ditointernet/uai-foundation";
import styled from "styled-components";

import teamImage from "../../public/images/Team.svg";

const Team = () => (
  <Section>
    <ImageWrapper>
      <img src={teamImage.src} alt="Nosso time" />
      <Circle top="-5vw" left="70%" />
      <Circle top="-5vw" left="62%" size="3vw" color={COLORS.NAVY_MAIN} />
      <Circle bottom="-5vw" right="70%" />
      <Retangle />
    </ImageWrapper>
    <Content>
      <h2>Nosso time é formado por FERAs. Falta você.</h2>
      <p>
        <b>Valorizamos e acreditamos nas pessoas</b>. Dos produtos orientados
        pela experiência de quem usa, ao ambiente sempre favorável à evolução da
        nossa equipe, elas estão no centro de tudo.
      </p>
      <p>
        Por aqui, você vai encontrar vários desafios, além de
        <b> muita parceria e espírito colaborativo</b>. Porque entendemos que,
        crescendo juntos, podemos ir muito mais longe. Então, se ao longo da sua
        jornada, você perceber que acumulou aprendizados – e isso for motivo de
        muita alegria, é sinal de que você se encaixou perfeitamente à nossa
        cultura.
      </p>
    </Content>
  </Section>
);

const Section = styled.section`
  display: flex;

  @media (max-width: 1060px) {
    align-items: center;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;

  img {
    width: 100%;
    height: fit-content;
    border-radius: 0px 0px 150px 0px;
    box-shadow: 24px 0px 0px -8px rgba(230, 232, 237, 0.5);
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${GRID(8)} ${GRID(10)};

  h2 {
    margin: 0;
    color: ${COLORS.NAVY_DARK};
    margin-bottom: ${GRID(5)};
  }

  p {
    color: ${COLORS.GRAY_4};
  }

  b {
    color: ${COLORS.NAVY_DARK};
  }

  @media (max-width: 1060px) {
    padding: ${GRID(2)} ${GRID(4)};
  }

  @media (max-width: 768px) {
    padding: ${GRID(2)};
    margin-bottom: ${GRID(2)};
  }
`;

type CircleProps = {
  size?: string;
  color?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};

const Circle = styled.div<CircleProps>`
  position: absolute;
  width: ${(props) => props.size || "10vw"};
  height: ${(props) => props.size || "10vw"};
  border: ${(props) => (props.size ? "7px" : GRID(1.25))} solid
    ${(props) => props.color || COLORS.GREEN_MAIN};
  border-radius: 50%;
  top: ${(props) => props.top || "initial"};
  left: ${(props) => props.left || "initial"};
  right: ${(props) => props.right || "initial"};
  bottom: ${(props) => props.bottom || "initial"};

  @media (max-width: 768px) {
    width: ${(props) => (props.size ? GRID(3) : GRID(10))};
    height: ${(props) => (props.size ? GRID(3) : GRID(10))};
    top: ${(props) => (props.top ? GRID(-5) : "initial")};
    bottom: ${(props) => (props.bottom ? GRID(-5) : "initial")};
  }
`;

const Retangle = styled.div`
  width: 15vw;
  height: ${GRID(1.5)};
  background: ${COLORS.NAVY_MAIN};
  position: absolute;
  bottom: ${GRID(-4)};
  right: 43%;

  @media (max-width: 768px) {
    width: ${GRID(16)};
    height: 7px;
    bottom: ${GRID(-2)};
  }
`;

export default Team;
