import React from 'react';
import styled from 'styled-components'
import { COLORS, GRID } from "@ditointernet/uai-foundation";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';

import "swiper/css";
import "swiper/css/navigation"

type Card = {
    img: string,
    title: string,
    description: string,
}

const Benefits = () => {
    SwiperCore.use([Navigation]);

    const cards: Card[] = [
        {
            img: "./icons/plano-de-saude.svg",
            title: "Plano de saúde",
            description: "Plano de saúde e odontológico Bradesco de cobertura nacional e sem coparticipação nem mensalidade para FERAs e dependentes.",
        },
        {
            img: "./icons/cartao-caju.svg",
            title: "Cartão Caju",
            description: "Crédito no valor de R$30,00/dia em cartão com bandeira Visa™ para você usar como e onde quiser, inclusive como refeição e alimentação.",
        },
        {
            img: "./icons/licenca-maternidade.svg",
            title: "Licença maternidade",
            description: "São 180 dias para mamães e 20 dias para papais, que valem também para casos de adoção e guarda judicial. Durante esse período, VA/VR são mantidos.",
        },
        {
            img: "./icons/gympass.svg",
            title: "Gympass",
            description: "Gympass com planos variados, incluindo um gratuito, para manter a saúde física e mental em dia. O importante é cuidar do seu bem-estar.",
        },
        {
            img: "./icons/ingles-in-company.svg",
            title: "Inglês in company",
            description: "Turmas reduzidas divididas por nível de fluência.",
        },
        {
            img: "./icons/incentivos-ao-aprendizado.svg",
            title: "Incentivos ao aprendizado",
            description: "Participação em cursos, eventos, talks e meetups, compra de livros, biblioteca interna, entre outros.",
        },
        {
            img: "./icons/bonus-anual.svg",
            title: "Bonûs anual",
            description: "Bônus anual por atingimento de metas, afinal, esses são os resultados do seu trabalho.",
        },
    ];

    return (
        <Section>
            <Title>Nossos benefícios</Title>
            <SwiperMobile navigation={true} loop={true}>
                {cards.map((card: Card, index: number) => (
                    <SwiperSlide key={index}>
                        <CardImg style={{ backgroundImage: `url(${card.img})` }} />
                        <CardTitle>{card.title}</CardTitle>
                        <CardDescription>{card.description}</CardDescription>
                    </SwiperSlide>
                ))}
            </SwiperMobile>
            <WrapperCards>
                {cards.map((card: Card, index: number) => (
                    <Card key={index}>
                        <CardImg style={{ backgroundImage: `url(${card.img})` }} />
                        <CardTitle>{card.title}</CardTitle>
                        <CardDescription>{card.description}</CardDescription>
                    </Card>
                ))}
            </WrapperCards>
        </Section>
    )
};

const Section = styled.section`
    margin: 0 auto;
    padding: ${GRID(5)} ${GRID(2)} ${GRID(40)};
    max-width: ${GRID(180)};

    background-image: url('./images/benefits.svg');
    background-size: ${GRID(41.25)};
    background-repeat: no-repeat;
    background-position-x: 20%;
    background-position-y: 100%;
    
    @media only screen and (min-width: 1024px) {
        margin: 0 auto;
        padding: ${GRID(10)} ${GRID(9)} ${GRID(25)};
        background-size: ${GRID(53.75)};
        background-position-x: 85%;
    }
`

const Title = styled.h2`
    font-size: ${GRID(2.75)};
    line-height: ${GRID(4.125)};
    font-weight: 700;
    margin: 0 0 ${GRID(5)};

    @media only screen and (min-width: 1024px) {
        font-size: ${GRID(4.5)};
        line-height: ${GRID(6.75)};
        margin: 0 0 ${GRID(14)};
    }
`

const SwiperMobile = styled(Swiper)`
    padding: 0 0 ${GRID(5.5)};
    max-width: ${GRID(42.875)};

    @media only screen and (min-width: 1024px) {
        display: none;
    }

    .swiper-wrapper {
        > div {
            min-height: ${GRID(45)};
            border: ${GRID(0.125)} solid #E9E9E9;
            padding: ${GRID(4)};
            max-width: 100%;
            border-radius: ${GRID(3)};
        }
    }

    .swiper-button-prev {
        width: ${GRID(4)};
        height: ${GRID(4.125)};

        top: unset;
        left: unset;
        right: ${GRID(6)};
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
        right: 0;
        bottom: 0;

        &::after {
            content: url('./icons/arrow-right.svg');
            line-height: ${GRID(4)};
        }
    }
`

const WrapperCards = styled.div`
    display: none;
    
    @media only screen and (min-width: 1024px) {
        gap: ${GRID(3)};
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`

const Card = styled.div`
    border: ${GRID(0.125)} solid #E9E9E9;
    padding: ${GRID(4)};
    max-width: ${GRID(42.875)};
    border-radius: ${GRID(3)};
    
    
    @media only screen and (min-width: 1024px) {
        max-width: calc(33% - ${GRID(1.75)});

        &:hover {
            box-shadow: 0 ${GRID(0.5)} ${GRID(1)} rgba(0, 0, 0, 0.08);
        }
    }
`

const CardImg = styled.div`
    width: ${GRID(12)};
    height: ${GRID(12)};
    margin: 0 0 ${GRID(3)};
    background-size: cover;
`

const CardTitle = styled.h3`
    color: #223154;
    margin: 0 0 ${GRID(2.5)};
    font-size: ${GRID(2.75)};
    font-weight: 700;
    line-height: ${GRID(4.125)};
`

const CardDescription = styled.div`
    color: #8D95A7;
    font-size: ${GRID(2)};
    font-weight: 500;
    line-height: ${GRID(3)};
`

export default Benefits;