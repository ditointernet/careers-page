import React from "react";
import styled from "styled-components";
import CardsList from "@/components/CardsList";
import { COLORS, GRID } from "@ditointernet/uai-foundation";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"

const Initiatives = () => {
    SwiperCore.use([Navigation, Pagination]);

    const principalInitiatives: any = [
        {
            name: "AfroDito",
            img: "./images/afro.png",
        },
        {
            name: "DitoPride",
            img: "./images/pride.png",
        },
        {
            name: "DitoGirls",
            img: "./images/girls.png",
        },
        {
            name: "DitoParents",
            img: "./images/parents.png",
        }
    ]

    const othersInitiatives: any = [
        {
            img: "./icons/initiatives1.svg",
            description: "Total liberdade de estilo, aqui não tem essa de dress code.",
        },
        {
            img: "./icons/initiatives2.svg",
            description: "Lanches, games e fliperama à vontade no escritório para relaxar durante os seus intervalos.",
        },
        {
            img: "./icons/initiatives3.svg",
            description: "Banda de FERAs, para quem curte fazer um som.",
        },
        {
            img: "./icons/initiatives4.svg",
            description: "Convênios e descontos em vários restaurantes, academias, instituições de ensino, escolas de idiomas, entre outros.",
        },
        {
            img: "./icons/initiatives5.svg",
            description: "Times de futebol (feminino e masculino) que batem um bolão.",
        },
        {
            img: "./icons/initiatives6.svg",
            description: "Confraternizações constantes e eventos de integração entre equipes para proporcionar novas conexões e amizades.",
        },
    ];

    return (
        <Section>
            <SectionWrapper>
                <Title>Nossas iniciativas</Title>
                <Fragment>
                    <SubTitle>Comitês de Diversidade e Inclusão</SubTitle>
                    <Description>AfroDito, DitoPride, DitoGirls, DitoParents – que realizam eventos direcionados, debates e iniciativas de conscientização e inclusão de grupos minorizados.</Description>
                    <InitiativeWrapperDesktop>
                        {principalInitiatives.map((initiative: any, index: number) => (
                            <InitiativeSlide key={index}>
                                <InitiativeImg image={initiative.img} />
                                <InitiativeTitle>{initiative.name}</InitiativeTitle>
                            </InitiativeSlide>
                        ))}
                    </InitiativeWrapperDesktop>
                    <InitiativeSwiperMobile
                        loop={true}
                        navigation={true}
                        slidesPerView={"auto"}
                        slidesPerGroup={1}
                        centeredSlides={true}
                    >
                        {principalInitiatives.map((initiative: any, index: number) => (
                            <SwiperSlide style={{ width: "50%" }} key={index}>
                                <InitiativeSlide>
                                    <InitiativeImg className="initiativeImage" image={initiative.img} />
                                    <InitiativeTitle className="initiativeName">{initiative.name}</InitiativeTitle>
                                </InitiativeSlide>
                            </SwiperSlide>
                        ))}
                    </InitiativeSwiperMobile>
                </Fragment>
                <Fragment>
                    <SubTitle>Dito Impacto</SubTitle>
                    <Description>Uma iniciativa criada para retribuir para a sociedade e multiplicar o sentimento de solidariedade. Além de ações de voluntariado, auxiliamos grupos ou instituições que lutam por causas de extrema importância com a ajuda do nosso time de FERAs.</Description>
                </Fragment>
                <SubTitle>Outras iniciativas</SubTitle>
                <CardsList minMobileHeight={285} minDesktopHeight={285} cards={othersInitiatives} />
            </SectionWrapper>
        </Section>
    )
};

const Section = styled.section`
    margin: ${GRID(1)} 0;
    background-color: #F8F8F8;

    @media only screen and (min-width: 1024px) {
        margin: ${GRID(2)} 0;
    }
`

const SectionWrapper = styled.div`
    margin: 0 auto;
    padding: ${GRID(8)} ${GRID(2)};
    max-width: ${GRID(180)};
    
    @media only screen and (min-width: 1024px) {
        padding: ${GRID(10)} ${GRID(9)};
    }
`

const Title = styled.h2`
    color: ${COLORS.NAVY_DARK};
    margin: 0 0 ${GRID(4)};
    font-size: ${GRID(2.75)};
    text-align: center;
    font-weight: 700;
    line-height: ${GRID(4.125)};

    @media only screen and (min-width: 1024px) {
        margin: 0 0 ${GRID(9)};
        font-size: ${GRID(4.5)};
        line-height: ${GRID(6.75)};
    }
`

const SubTitle = styled.h3`
    color: ${COLORS.NAVY_DARK};
    margin: 0 0 ${GRID(2)};
    font-size: ${GRID(2)};
    text-align: center;
    font-weight: 700;
    line-height: ${GRID(3)};

    @media only screen and (min-width: 1024px) {
        margin: 0 0 ${GRID(3)};
        font-size: ${GRID(3.5)};
        line-height: ${GRID(5.25)};
    }
`

const Description = styled.p`
    color: ${COLORS.GRAY_4};
    margin: 0 auto ${GRID(10)};
    font-size: ${GRID(2)};
    max-width: ${GRID(100)};
    text-align: center;
    font-weight: 500;
    line-height: ${GRID(3)};

    @media only screen and (min-width: 1024px) {
        margin: 0 auto ${GRID(15)};
    }
`

const Fragment = styled.div`
    margin: 0 0 ${GRID(10)};

    @media only screen and (min-width: 1024px) {
        margin: 0 auto ${GRID(15)};
    }
`

const InitiativeSwiperMobile = styled(Swiper)`
    padding: 0 0 ${GRID(5.5)};
    margin: 0 -${GRID(2)};

    .swiper-wrapper {
        .swiper-slide-active {
            .initiativeImage {
                filter: none;
            }
            
            .initiativeName {
                color: ${COLORS.NAVY_DARK};
            }
        }
    }

    @media only screen and (min-width: 768px) {
        display: none;
    }

    .swiper-button-prev {
        width: ${GRID(4)};
        height: ${GRID(4.125)};

        top: unset;
        left: unset;
        right: ${GRID(8)};
        bottom: 0;

        &::after {
            content: url('./icons/arrow-left.svg');
            line-height: ${GRID(4)};
        }
    }

    .swiper-button-next {
        width: ${GRID(4)};
        height: ${GRID(4.125)};

        top: unset;
        left: unset;
        right: ${GRID(2)};
        bottom: 0;

        &::after {
            content: url('./icons/arrow-right.svg');
            line-height: ${GRID(4)};
        }
    }
`

const InitiativeSlide = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

const InitiativeImg = styled.div<{ image: string }>`
    width: ${GRID(17.5)};
    filter: grayscale(1);
    height: ${GRID(17.5)};
    box-shadow: 0px 3px 7px rgba(65, 65, 65, 0.1);
    border-radius: 100%;
    margin-bottom: ${GRID(3)};
    background-size: cover;
    background-image: url(${props => props.image});
    background-position: center;

    @media only screen and (min-width: 768px) {
        filter: none;
    }
`

const InitiativeTitle = styled.p`
    color: ${COLORS.GRAY_2};
    margin: 0;
    font-size: ${GRID(2.75)};
    font-weight: 600;
    line-height: ${GRID(4.125)};

    @media only screen and (min-width: 768px) {
        color: ${COLORS.NAVY_DARK};
    }
`

const InitiativeWrapperDesktop = styled.div`
    display: none;
    justify-content: space-around;

    @media only screen and (min-width: 768px) {
        display: flex;
    }
`

export default Initiatives;