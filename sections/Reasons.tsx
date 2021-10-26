import React, { useState, useEffect, useRef } from "react";
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

const imageSlider = [
  {
    url: "/images/slider.jpg",
    title: "Dito",
  },
  {
    url: "/images/slider.jpg",
    title: "Dito",
  },
  {
    url: "/images/slider.jpg",
    title: "Dito",
  },
  {
    url: "/images/slider.jpg",
    title: "Dito",
  },
  {
    url: "/images/slider.jpg",
    title: "Dito",
  },
];

const Reasons = () => {
  const [currentBlock, setCurrent] = useState(0);
  const [currentSlider, setSlider] = useState(0);
  const sliderRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (sliderRef && sliderRef?.current && window.innerWidth > 768)
      sliderRef.current.scrollLeft =
        sliderRef.current.children[currentBlock].getBoundingClientRect().left -
        16;

    if (sliderRef && sliderRef?.current && window.innerWidth < 768)
      sliderRef.current.scrollLeft =
        sliderRef.current.children[currentBlock].clientWidth * currentBlock;
  }, [currentBlock, sliderRef]);

  const scrollLeft = () => {
    if (currentBlock > 0) setCurrent(currentBlock - 1);
  };

  const scrollRight = () => {
    if (currentBlock < reasonsBlocks.length - 1) setCurrent(currentBlock + 1);
  };

  const slideLeft = () => {
    if (currentSlider > 0) setSlider(currentSlider - 1);
  };

  const slideRight = () => {
    if (currentSlider < imageSlider.length - 1) setSlider(currentSlider + 1);
  };

  return (
    <Section>
      <Title>Mais razões para trabalhar na Dito</Title>

      <SlideBlocks ref={sliderRef}>
        {reasonsBlocks.map((block, index) => (
          <Block key={index} active={currentBlock === index}>
            <img src={block.image} alt={block.text} />
            <p>{block.text}</p>
          </Block>
        ))}
      </SlideBlocks>

      <SliderActions>
        <Button onClick={() => scrollLeft()} desactive={currentBlock == 0}>
          <svg
            width="9"
            height="12"
            viewBox="0 0 9 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.69698 0.321548C8.10798 0.736644 8.10834 1.4052 7.69779 1.82075L3.56875 6.00002L7.6978 10.1793C8.10834 10.5948 8.10798 11.2634 7.69698 11.6785C7.27985 12.0998 6.59914 12.0998 6.18201 11.6785L0.621486 6.06258C0.587179 6.02793 0.587179 5.97212 0.621486 5.93747L6.18201 0.321548C6.59914 -0.0997335 7.27985 -0.0997338 7.69698 0.321548Z"
              fill="#00BD6A"
            />
          </svg>
        </Button>
        <Button
          onClick={() => scrollRight()}
          desactive={currentBlock == reasonsBlocks.length - 1}
        >
          <svg
            width="9"
            height="12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.303 11.678a1.066 1.066 0 0 1 0-1.499L5.43 6 1.302 1.82A1.066 1.066 0 0 1 2.818.322l5.56 5.616a.089.089 0 0 1 0 .126l-5.56 5.615a1.066 1.066 0 0 1-1.515 0Z"
              fill="#00BD6A"
            />
          </svg>
        </Button>
      </SliderActions>

      <Content>
        <Columns>
          <Column>
            <RemoteJob viewBox="0 0 237 244" />
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
            <Location viewBox="0 0 235 219" />
          </Column>
          <Column>
            <h3>Sede localizada no coração da Savassi</h3>
            <p>
              Caso prefira o trabalho presencial, você pode optar por trabalhar
              na nossa sede, em <b>Belo Horizonte.</b>
            </p>

            <SliderWrapper>
              <Slider>
                {imageSlider.map(({ url, title }, index) => (
                  <img
                    src={url}
                    alt={title}
                    key={index}
                    className={currentSlider === index ? "active" : ""}
                  />
                ))}
              </Slider>
              <SliderControls>
                <Button
                  onClick={() => slideLeft()}
                  desactive={currentSlider == 0}
                >
                  <svg
                    width="9"
                    height="12"
                    viewBox="0 0 9 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.69698 0.321548C8.10798 0.736644 8.10834 1.4052 7.69779 1.82075L3.56875 6.00002L7.6978 10.1793C8.10834 10.5948 8.10798 11.2634 7.69698 11.6785C7.27985 12.0998 6.59914 12.0998 6.18201 11.6785L0.621486 6.06258C0.587179 6.02793 0.587179 5.97212 0.621486 5.93747L6.18201 0.321548C6.59914 -0.0997335 7.27985 -0.0997338 7.69698 0.321548Z"
                      fill="#00BD6A"
                    />
                  </svg>
                </Button>
                <Button
                  onClick={() => slideRight()}
                  desactive={currentSlider == imageSlider.length - 1}
                >
                  <svg
                    width="9"
                    height="12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.303 11.678a1.066 1.066 0 0 1 0-1.499L5.43 6 1.302 1.82A1.066 1.066 0 0 1 2.818.322l5.56 5.616a.089.089 0 0 1 0 .126l-5.56 5.615a1.066 1.066 0 0 1-1.515 0Z"
                      fill="#00BD6A"
                    />
                  </svg>
                </Button>
              </SliderControls>
            </SliderWrapper>
          </Column>
        </Columns>
      </Content>
    </Section>
  );
};

const Section = styled.section`
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
  padding: ${GRID(2)} 0 ${GRID(2)} ${GRID(9)};
  scroll-behavior: smooth;

  @media (max-width: 768px) {
    padding: ${GRID(2)} ${GRID(2.75)};
  }

  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: transparent;
  }
`;

const Block = styled.div<{ active: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${GRID(4)};
  width: ${GRID(47.5)};
  min-width: ${GRID(47.5)};
  border-radius: ${GRID(2)};
  margin-right: ${GRID(2)};
  box-shadow: ${({ active }) =>
    active ? "0px 4px 8px rgba(0, 0, 0, 0.08)" : "none"};

  @media (max-width: 768px) {
    margin: 0;
    width: 100%;
    min-width: 100%;
  }

  @media (min-width: 768px) {
    &:hover {
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
    }
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

const SliderActions = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: ${GRID(4)} ${GRID(9)} 0 0;
  margin-bottom: ${GRID(11.5)};

  @media (max-width: 768px) {
    padding: 0 ${GRID(2)};
  }
`;

const Button = styled.div<{ desactive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${GRID(4)};
  height: ${GRID(4)};
  border-radius: ${GRID(4)};
  border: 1px solid ${COLORS.GRAY_2};
  margin: ${GRID(1)};
  cursor: pointer;
  transition: all 0.3s ease;

  &:active {
    transition: all 0.3s ease;
    transform: scale(1.1);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
  }

  path {
    fill: ${({ desactive }) => (desactive ? COLORS.GRAY_2 : COLORS.GREEN_MAIN)};
  }
`;

const Columns = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: ${GRID(123)};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  ${Columns} ~ ${Columns} {
    margin-top: ${GRID(17)};

    @media (max-width: 768px) {
      margin-top: ${GRID(4)};
    }
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  &:last-child {
    flex: 1;
    width: max-content;
    padding-top: ${GRID(5)};

    @media (min-width: 768px) {
      margin-left: ${GRID(12)};
    }
  }

  @media (max-width: 768px) {
    padding: 0 ${GRID(2)};
    flex: 1;

    &:last-child {
      width: 100%;
    }

    &:first-child {
      max-height: ${GRID(16)};
      max-width: ${GRID(16)};
      margin-bottom: ${GRID(2)};

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  h3 {
    color: ${COLORS.NAVY_DARK};
    font-size: ${GRID(3.5)};
    font-weight: 600;
    margin: 0 0 ${GRID(3)} 0;

    @media (max-width: 768px) {
      margin: 0 0 ${GRID(1)} 0;
    }
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

const SliderWrapper = styled.div`
  position: relative;

  @media (min-width: 768px) {
    width: ${GRID(70)};
    margin-top: ${GRID(7.75)};
    margin-left: ${GRID(10)};
  }
`;

const Slider = styled.div`
  position: relative;
  height: ${GRID(45.5)};

  @media (max-width: 768px) {
    height: ${GRID(27.87)};
  }

  img {
    position: absolute;
    border-radius: 0 0 0 ${GRID(11.12)};
    z-index: 2;
    top: 0;
    left: 0;
    opacity: 0;
    transition: all 0.3s ease;
    height: auto;

    @media (min-width: 768px) {
      width: ${GRID(70)};
    }

    @media (max-width: 768px) {
      width: auto;
      max-height: ${GRID(27.87)};
    }

    &.active {
      opacity: 1;
      transition: all 0.3s ease;
    }

    @media (min-width: 768px) {
      &.active + img {
        transition: all 0.3s ease;
        opacity: 0.3;
        top: ${GRID(3)};
        left: -${GRID(2)};
        z-index: 1;
        zoom: 0.9;

        & + img {
          transition: all 0.3s ease;
          opacity: 0.3;
          top: ${GRID(2)};
          left: auto;
          right: -${GRID(2)};
          z-index: 1;
          zoom: 0.9;
        }
      }
    }
  }
`;

const SliderControls = styled.div`
  display: flex;
  width: 100%;
  z-index: 3;
  justify-content: flex-end;

  @media (max-width: 768px) {
    margin-top: ${GRID(1)};
  }

  @media (min-width: 768px) {
    top: 40%;
    position: absolute;
  }

  ${Button} {
    @media (min-width: 768px) {
      position: absolute;
    }

    &:first-of-type {
      left: -${GRID(8.57)};
    }

    &:last-of-type {
      right: -${GRID(8.57)};
    }
  }
`;

export default Reasons;
