import React from 'react'
import styled from 'styled-components'
import CardsList from '@/components/CardsList';
import { COLORS, GRID } from "@ditointernet/uai-foundation";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from 'swiper';

import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"

const Initiatives = () => {
    SwiperCore.use([Navigation, Pagination]);

    const principalInitiatives: any = [
        {
            name: "AfroDito",
            img: "./images/afro.jpg",
        },
        {
            name: "DitoPride",
            img: "./images/pride.jpg",
        },
        {
            name: "DitoGirls",
            img: "./images/girls.jpg",
        },
        {
            name: "DitoParents",
            img: "./images/parents.jpg",
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
                    slidesPerView={'auto'}
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
        </Section>
    )
};

const Section = styled.section`
    padding: 64px 16px 80px;
    max-width: ${GRID(180)};
    margin: 0 auto;
`

const Title = styled.h2`
    color: #223154;
    margin: 0 0 40px;
    font-size: 22px;
    text-align: center;
    font-weight: 700;
    line-height: 33px;

    @media only screen and (min-width: 1024px) {
        margin: 0 0 72px;
        font-size: 36px;
        line-height: 54px;
    }
`

const SubTitle = styled.h3`
    color: #223154;
    margin: 0 0 16px;
    font-size: 16px;
    text-align: center;
    font-weight: 700;
    line-height: 24px;

    @media only screen and (min-width: 1024px) {
        margin: 0 0 24px;
        font-size: 28px;
        line-height: 42px;
    }
`

const Description = styled.p`
    color: #8D95A7;
    margin: 0 auto 80px;
    font-size: 16px;
    max-width: 800px;
    text-align: center;
    font-weight: 500;
    line-height: 24px;

    @media only screen and (min-width: 1024px) {
        margin: 0 auto 120px;
    }
`

const Fragment = styled.div`
    margin: 0 0 80px;
`

const InitiativeSwiperMobile = styled(Swiper)`
    padding: 0 0 ${GRID(5.5)};
    margin: 0 -16px;

    .swiper-wrapper {
        .swiper-slide-active {
            .initiativeImage {
                filter: none;
            }
            
            .initiativeName {
                color: #223154;
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
    width: 140px;
    height: 140px;
    background-image: url(${props => props.image});
    background-position: center;
    margin-bottom: 24px;
    filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale");

    @media only screen and (min-width: 768px) {
        filter: none;
    }
`

const InitiativeTitle = styled.p`
    color: #4141411A;
    margin: 0;
    font-size: 22px;
    font-weight: 600;
    line-height: 33px;

    @media only screen and (min-width: 768px) {
        color: #223154;
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