import React from 'react'
import styled from 'styled-components'
// import { COLORS, GRID } from "@ditointernet/uai-foundation";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation } from 'swiper';

// import "swiper/css";
// import "swiper/css/navigation"

const Initiatives = () => {
    // SwiperCore.use([Navigation]);

    // const cards: Card[] = [
    //     {
    //         img: "./icons/plano-de-saude.svg",
    //         description: "Plano de saúde e odontológico Bradesco de cobertura nacional e sem coparticipação nem mensalidade para FERAs e dependentes.",
    //     },
    //     {
    //         img: "./icons/cartao-caju.svg",
    //         description: "Crédito no valor de R$30,00/dia em cartão com bandeira Visa™ para você usar como e onde quiser, inclusive como refeição e alimentação.",
    //     },
    // ];

    return (
        <Section>
            <Title>Nossas iniciativas</Title>
            <Fragment>
                <SubTitle>Comitês de Diversidade e Inclusão</SubTitle>
                <Description>AfroDito, DitoPride, DitoGirls, DitoParents – que realizam eventos direcionados, debates e iniciativas de conscientização e inclusão de grupos minorizados.</Description>

                {/* <SwiperMobile navigation={true} loop={true}>
                    {cards.map((card: Card, index: number) => (
                        <SwiperSlide key={index}>
                            <CardImg style={{ backgroundImage: `url(${card.img})` }} />
                            <CardTitle>{card.title}</CardTitle>
                            <CardDescription>{card.description}</CardDescription>
                        </SwiperSlide>
                    ))}
                </SwiperMobile> */}
            </Fragment>
            <Fragment>
                <SubTitle>Dito Impacto</SubTitle>
                <Description>Uma iniciativa criada para retribuir para a sociedade e multiplicar o sentimento de solidariedade. Além de ações de voluntariado, auxiliamos grupos ou instituições que lutam por causas de extrema importância com a ajuda do nosso time de FERAs.</Description>
            </Fragment>
            <SubTitle>Outras iniciativas</SubTitle>
        </Section>
    )
};

const Section = styled.section`
    padding: 64px 16px 80px;
    text-align: center;
`

const Title = styled.h2`
    color: #223154;
    margin: 0 0 40px;
    font-size: 22px;
    font-weight: 700;
    line-height: 33px;
`

const SubTitle = styled.h3`
    color: #223154;
    margin: 0 0 16px;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
`

const Description = styled.p`
    color: #8D95A7;
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
`

const Fragment = styled.div`
    margin: 0 0 80px;
`

// const SwiperMobile = styled(Swiper)`
//     padding: 0 0 ${GRID(5.5)};
//     max-width: ${GRID(42.875)};
//     @media only screen and (min-width: 1024px) {
//         display: none;
//     }
//     .swiper-wrapper {
//         > div {
//             min-height: ${GRID(45)};
//             border: ${GRID(0.125)} solid #E9E9E9;
//             padding: ${GRID(4)};
//             max-width: 100%;
//             border-radius: ${GRID(3)};
//         }
//     }
//     .swiper-button-prev {
//         width: ${GRID(4)};
//         height: ${GRID(4.125)};
//         top: unset;
//         left: unset;
//         right: ${GRID(6)};
//         bottom: 0;
//         &::after {
//             content: url('./icons/arrow-left.svg');
//             line-height: ${GRID(4)};
//         }
//     }
//     .swiper-button-next {
//         width: ${GRID(4)};
//         height: ${GRID(4.125)};
//         top: unset;
//         left: unset;
//         right: 0;
//         bottom: 0;
//         &::after {
//             content: url('./icons/arrow-right.svg');
//             line-height: ${GRID(4)};
//         }
//     }
// `

export default Initiatives;