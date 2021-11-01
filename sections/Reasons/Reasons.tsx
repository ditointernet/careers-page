import React from "react";
import styled from "styled-components";
import { COLORS, GRID } from "@ditointernet/uai-foundation";

import RemoteJob from "../../public/images/remote-job.svg";
import Location from "../../public/images/location.svg";
import CardsList from "@/components/CardsList";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, EffectCards } from "swiper";

import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/effect-cards"

type Slide = {
    url: string,
    title: string,
}


const Reasons = () => {
    SwiperCore.use([Navigation, EffectCards]);

    const reasonsBlocks = [
        {
            img: "./images/gptw.jpg",
            description: "Desde 2017, estamos entre as melhores empresas para trabalhar (GPTW).",
        },
        {
            img: "./images/time.svg",
            description: "Time formado por mais de 100 FERAS de todo o Brasil.",
        },
        {
            img: "./images/flex-worksheet.svg",
            description: "Horários flexíveis de verdade, sem essa de bater ponto por aqui.",
        },
        {
            img: "./images/career-map.svg",
            description: "Ajudamos a desenvolver seu mapa de carreira para você seguir crescendo.",
        },
        {
            img: "./images/coop.svg",
            description: "Espírito colaborativo. Aqui não tem concorrência, tem parceria.",
        },
        {
            img: "./images/performance.svg",
            description: "Realizamos ciclos de performance periódicos.",
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
                <Container>
                    <Box>
                        <RemoteJob viewBox="0 0 237 244" />
                        <Content maxWidth={653}>
                            <h3>Trabalho remoto como padrão</h3>
                            <p>Você pode trabalhar de <b>qualquer lugar do país</b> e aproveitar toda a flexibilidade desse modelo para ter mais <b>qualidade de vida.</b> É você quem escolhe se prefere viver na praia, no campo, no interior, onde for.</p>
                        </Content>
                    </Box>

                    <Box>
                        <Location viewBox="0 0 235 219" />
                        <Content maxWidth={555}>
                            <h3>Sede localizada no coração da Savassi</h3>
                            <p>Caso prefira o trabalho presencial, você pode optar por trabalhar na nossa sede, em <b>Belo Horizonte.</b></p>
                        </Content>
                    </Box>
                </Container>
                <SwiperCustom
                    loop={true}
                    navigation={true}
                    grabCursor={true}
                    effect='cards'
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
`

const SectionWrapper = styled.div`
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
    width: 100%;
    margin: 0;
    padding: 0 5%;
    max-width: calc(557px + 150px);
    align-self: flex-end;

    @media only screen and (min-width: 768px) {
        padding: 0 ${GRID(9.375)};
    }

    .swiper-wrapper {
        width: 100%;
        height: ${GRID(45.5)};
        z-index: 0;
        
        > .swiper-slide {
            display: flex;
            border-bottom-left-radius: ${GRID(11.125)};
            background-color: ${COLORS.WHITE};

            &:not(.swiper-slide-active) {
              filter: grayscale(.8)
            }
            
            &.swiper-slide-active {
                box-shadow: 0px 0px ${GRID(6)} rgba(0, 0, 0, 0.1);
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
            content: url('./icons/arrow-left.svg');
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
            content: url('./icons/arrow-right.svg');
            line-height: ${GRID(4)};
        }
    }
`

const Slide = styled.div<{ image: string }>`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-image: url(${props => props.image});
`

const Container = styled.div`
    gap: 56px;
    margin: 56px auto 40px;
    display: flex;
    flex-direction: column;
`;

const Box = styled.div`
    gap: 30px;
    margin: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    @media (min-width: 1024px) {
        gap: 96px;
        flex-direction: row;
    }

    > svg {
        margin: 0 0 30px;
        min-width: 83px;
        min-height: 80px;

        @media (min-width: 1024px) {
            margin: 0;
            min-width: 237px;
            min-height: 244px;
        }
    }
`;

const Content = styled.div<{ maxWidth?: number }>`
    display: flex;
    flex-direction: column;
    max-width: 812px;

    @media (min-width: 1024px) {
        max-width: ${({ maxWidth }) => maxWidth ? GRID(maxWidth / 8) : "max-content"};
    }

    > h3 {
        margin: 0 0 ${GRID(2)};
        color: ${COLORS.NAVY_DARK};
        font-size: 22px;
        line-height: 33px;
        font-weight: 600;

        @media (min-width: 1024px) {
            margin: 0 0 ${GRID(3)};
            font-size: 28px;
            line-height: 42px;
        }
    }

    > p {
        color: ${COLORS.GRAY_4};
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;

        b {
            color: ${COLORS.NAVY_DARK};
            font-weight: 700;
        }
    }
`

export default Reasons;
