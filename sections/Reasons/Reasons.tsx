import styled from "styled-components";
import { COLORS_NEXT, GRID } from "@ditointernet/uai-foundation";

import CardsList from "@/components/CardsList";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, EffectCards } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import { transparentize } from "utils/colors-utils";

type Slide = {
  url: string;
  title: string;
};

const Reasons = () => {
  SwiperCore.use([Autoplay, Navigation, EffectCards]);

  const reasonsBlocks = [
    {
      img: "./images/time.svg",
      description: "Time formado por mais de 100 FERAS de todo o Brasil.",
    },
    {
      img: "./images/flex-worksheet.svg",
      description:
        "Horários flexíveis mesmo. Não precisa prestar contas das horas trabalhadas.",
    },
    {
      img: "./images/career-map.svg",
      description:
        "Ajudamos a desenvolver seu mapa de carreira para você seguir crescendo.",
    },
    {
      img: "./images/coop.svg",
      description:
        "Espírito colaborativo. Aqui não tem concorrência, tem parceria.",
    },
    {
      img: "./images/performance.svg",
      description: "Realizamos avaliações de desempenho periódicas.",
    },
    {
      img: "./images/location.svg",
      description: "Sede localizada no coração de Belo Horizonte.",
    },
  ];

  const imageSlider: Slide[] = [
    {
      url: "./images/sede-001.jpg",
      title: "Dito",
    },
    {
      url: "./images/sede-002.jpg",
      title: "Dito",
    },
    {
      url: "./images/sede-003.jpg",
      title: "Dito",
    },
    {
      url: "./images/sede-004.jpg",
      title: "Dito",
    },
    {
      url: "./images/sede-005.jpg",
      title: "Dito",
    },
  ];

  return (
    <Section>
      <SectionWrapper>
        <Title>Mais razões para trabalhar aqui</Title>
        <CardsList cards={reasonsBlocks} minMobileHeight={260} /> 
        <SwiperCustom
          loop={true}
          autoplay={{
            delay: 2500,
          }}
          navigation={true}
          grabCursor={true}
          effect="cards"
        >
          {imageSlider.map((slide: Slide, index: number) => (
            <SwiperSlide key={index}>
              <Slide image={slide.url} />
            </SwiperSlide>
          ))}
        </SwiperCustom>
      </SectionWrapper>
    </Section>
  );
};

const Section = styled.section`
  margin: ${GRID(1)} 0;

  @media only screen and (min-width: 1024px) {
    margin: ${GRID(2)} 0;
  }
`;

const SectionWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  padding: ${GRID(8)} ${GRID(2)};
  max-width: ${GRID(180)};
  flex-direction: column;

  @media only screen and (min-width: 1024px) {
    padding: ${GRID(10)} ${GRID(9)};
  }
`;

const Title = styled.h2`
  color: ${COLORS_NEXT.BRAND.NAVY_900};
  margin: 0 0 ${GRID(4)} 0;
  font-size: ${GRID(2.75)};
  line-height: ${GRID(4.125)};

  @media only screen and (min-width: 1024px) {
    margin: 0 0 ${GRID(7)} 0;
    font-size: ${GRID(4.5)};
    line-height: ${GRID(6.75)};
  }
`;

const SwiperCustom = styled(Swiper)`
  width: 80%;
  margin: 0;
  margin-top: ${GRID(5)};
  padding: 0 5%;
  max-width: ${GRID(120)};
  align-self: center;

  @media only screen and (min-width: 768px) {
    padding: 0 ${GRID(9.375)};
  }

  .swiper-wrapper {
    width: 100%;
    height: ${GRID(55.5)};
    z-index: 0;

    > .swiper-slide {
      display: flex;
      border-bottom-left-radius: ${GRID(11.125)};
      background-color: ${COLORS_NEXT.WHITE};

      &:not(.swiper-slide-active) {
        filter: grayscale(0.8);
      }

      &.swiper-slide-active {
        box-shadow: 0px 0px ${GRID(6)} ${transparentize(COLORS_NEXT.BLACK, "0.1")};
      }
    }
  }

  .swiper-button-prev {
    left: 0;
    width: ${GRID(4)};
    height: ${GRID(4.125)};
    z-index: 1;
    display: none;

    @media only screen and (min-width: 1024px) {
      display: block;
    }

    &::after {
      content: url("./icons/arrow-left.svg");
      line-height: ${GRID(4)};
    }
  }

  .swiper-button-next {
    right: 0;
    width: ${GRID(4)};
    height: ${GRID(4.125)};
    z-index: 1;
    display: none;

    @media only screen and (min-width: 1024px) {
      display: block;
    }

    &::after {
      content: url("./icons/arrow-right.svg");
      line-height: ${GRID(4)};
    }
  }
`;

const Slide = styled.div<{ image: string }>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url(${(props) => props.image});
`;

const Container = styled.div`
  gap: ${GRID(7)};
  margin: ${GRID(7)} auto ${GRID(5)};
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  gap: ${GRID(3.75)};
  margin: 0;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 1024px) {
    gap: ${GRID(12)};
    flex-direction: row;
  }

  > svg {
    margin: 0 0 ${GRID(3.75)};
    min-width: ${GRID(10.375)};
    min-height: ${GRID(10)};

    @media (min-width: 1024px) {
      margin: 0;
      min-width: ${GRID(29.625)};
      min-height: ${GRID(30.5)};
    }
  }
`;

const Content = styled.div<{ maxWidth?: number }>`
  display: flex;
  flex-direction: column;
  max-width: ${GRID(101.5)};

  @media (min-width: 1024px) {
    max-width: ${({ maxWidth }) =>
      maxWidth ? GRID(maxWidth / 8) : "max-content"};
  }

  > h3 {
    margin: 0 0 ${GRID(2)};
    color: ${COLORS_NEXT.BRAND.NAVY_900};
    font-size: ${GRID(2.75)};
    line-height: ${GRID(4.125)};
    font-weight: 600;

    @media (min-width: 1024px) {
      margin: 0 0 ${GRID(3)};
      font-size: ${GRID(3.5)};
      line-height: ${GRID(5.25)};
    }
  }

  > p {
    color: ${COLORS_NEXT.NEUTRAL_400};
    font-size: ${GRID(2)};
    line-height: ${GRID(3)};
    font-weight: 500;

    b {
      color: ${COLORS_NEXT.BRAND.NAVY_900};
      font-weight: 700;
    }
  }
`;

export default Reasons;
