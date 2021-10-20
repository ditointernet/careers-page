import React from 'react'
import styled from 'styled-components'
import CardsList from '@/components/CardsList';
import { COLORS, GRID } from "@ditointernet/uai-foundation";

const Initiatives = () => {

    const cards: any = [
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
            </Fragment>
            <Fragment>
                <SubTitle>Dito Impacto</SubTitle>
                <Description>Uma iniciativa criada para retribuir para a sociedade e multiplicar o sentimento de solidariedade. Além de ações de voluntariado, auxiliamos grupos ou instituições que lutam por causas de extrema importância com a ajuda do nosso time de FERAs.</Description>
            </Fragment>
            <SubTitle>Outras iniciativas</SubTitle>
            <CardsList minMobileHeight={285} minDesktopHeight={285} cards={cards} />
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
    margin: 0 0 80px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
`

const Fragment = styled.div`
    margin: 0 0 80px;
`

export default Initiatives;