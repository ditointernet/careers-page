import { COLORS, GRID } from "@ditointernet/uai-foundation";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import { ChevronLeft, ChevronRight } from "@ditointernet/uai-icons";

const Team = () => (
  <Section id="nosso-time">
    <SectionWrapper>
      <ImageWrapper>
        <Carousel
          showStatus={false}
          showThumbs={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <ArrowButton type="button" onClick={onClickHandler} title={label}>
                <ChevronLeft />
              </ArrowButton>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <ArrowButton
                type="button"
                onClick={onClickHandler}
                title={label}
                isNext
              >
                <ChevronRight />
              </ArrowButton>
            )
          }
          infiniteLoop
          autoPlay
        >
          <img src="./images/feras_001.jpg" alt="Nosso time" />
          <img src="./images/feras_002.jpg" alt="Nosso time" />
          <img src="./images/feras_003.jpg" alt="Nosso time" />
        </Carousel>
        <Circle top={GRID(-9)} left="75%" />
        <Circle
          top={GRID(-9)}
          left="66%"
          size={GRID(5)}
          color={COLORS.NAVY_MAIN}
        />
        <Circle bottom={GRID(-7)} right="75%" />
        <Retangle />
        <img src="./images/dots.svg" className="dots-top" alt="dots" />
        <img src="./images/dots.svg" className="dots-bottom" alt="dots" />
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
  gap: ${GRID(4)};
  margin: 0 auto;
  display: flex;
  padding: ${GRID(8)} ${GRID(2)};
  max-width: ${GRID(180)};
  align-items: center;
  flex-direction: column-reverse;

  @media (min-width: 1024px) {
    gap: ${GRID(10)};
    padding: ${GRID(10)} ${GRID(9)};
    align-items: flex-start;
    flex-direction: row;
  }
`

const ImageWrapper = styled.div`
  border-radius: 0px 0px 20% 0px;
  box-shadow: 24px 0px 0px -8px rgba(230, 232, 237, 0.5);
  display: flex;
  position: relative;
  width: 100%;
  max-width: ${GRID(91)};

  img {
    width: 100%;
    height: fit-content;
  }

  ul.control-dots > li.selected {
    width: ${GRID(1.5)};
    height: ${GRID(1.5)};
  }

  .dots-top,
  .dots-bottom {
    position: absolute;
    width: ${GRID(13)};
  }

  .dots-top {
    top: ${GRID(-3)};
    left: 6%;
  }

  .dots-bottom {
    bottom: ${GRID(-3)};
    right: 6%;
  }

  @media (max-width: 768px) {
    width: 90%;

    .dots-top,
    .dots-bottom {
      width: ${GRID(7)};
    }

    .dots-top {
      top: ${GRID(-2)};
    }

    .dots-bottom {
      bottom: ${GRID(-2)};
    }
  }
`;

const ArrowButton = styled.button<{ isNext?: boolean }>`
  position: absolute;
  background: transparent;
  border: none;
  z-index: 10;
  top: calc(50% - 32px);
  left: ${(props) => (props.isNext ? "initial" : "5%")};
  right: ${(props) => (props.isNext ? "5%" : "initial")};
  cursor: pointer;

  svg {
    width: ${GRID(8)};
    height: ${GRID(8)};

    path {
      fill: ${COLORS.WHITE};
    }
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 1024px) {
    margin-top: ${GRID(8)};
  }

  h2 {
    color: ${COLORS.NAVY_DARK};
    margin: 0 0 ${GRID(5)} 0;
    font-size: ${GRID(2.75)};
    font-weight: 700;
    line-height: ${GRID(4.125)};

    @media (min-width: 1024px) {
      font-size: ${GRID(4.5)};
      line-height: ${GRID(6.75)};
    }
  }

  p {
    color: ${COLORS.GRAY_4};
    margin: 0 0 ${GRID(3)} 0;
    font-size: ${GRID(2)};
    font-weight: 500;
    line-height: ${GRID(3)};
    
    b {
      color: ${COLORS.NAVY_DARK};
      font-weight: 700;
    }
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
  max-width: ${(props) => (props.size ? GRID(5) : GRID(18))};
  max-height: ${(props) => (props.size ? GRID(5) : GRID(18))};
  border: ${(props) => (props.size ? GRID(1) : GRID(1.25))} solid
    ${(props) => props.color || COLORS.GREEN_MAIN};
  border-radius: 50%;
  top: ${(props) => props.top || "initial"};
  left: ${(props) => props.left || "initial"};
  right: ${(props) => props.right || "initial"};
  bottom: ${(props) => props.bottom || "initial"};
  z-index: 10;

  @media (max-width: 768px) {
    width: ${(props) => (props.size ? GRID(3) : GRID(10))};
    height: ${(props) => (props.size ? GRID(3) : GRID(10))};
    top: ${(props) => (props.top ? GRID(-5) : "initial")};
    bottom: ${(props) => (props.bottom ? GRID(-5) : "initial")};
  }
`;

const Retangle = styled.div`
  width: ${GRID(28)};
  height: ${GRID(1.5)};
  background: ${COLORS.NAVY_MAIN};
  position: absolute;
  bottom: ${GRID(-4)};
  left: 20%;
  z-index: 5;

  @media (max-width: 768px) {
    width: ${GRID(16)};
    height: ${GRID(1)};
    bottom: ${GRID(-2)};
  }
`;

export default Team;
