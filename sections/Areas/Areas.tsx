import React from "react";
import styled from "styled-components"
import { COLORS, GRID } from "@ditointernet/uai-foundation";
import ButtonSecondary from "@/components/ButtonSecondary";

const Areas = () => (
    <Section>
        <Title>Nossas áreas</Title>
        <Description
            marginBottomMobile={60}
            marginBottomDesktop={109}
            style={{ maxWidth: 580 }}
        >
            Hoje o nosso time de FERAs está dividido em <b>3 grandes</b> áreas que, juntas, são responsáveis por entregar um <b>produto de qualidade</b> e que nossos clientes amam. Dá só uma olhada:
        </Description>
        <AreaWrapper>
            <Area maxWidth={1051} margin="0 0 0 79px">
                <AreaImg image="./images/area-tecnologia.svg" />
                <AreaContent>
                    <AreaTitle>Tecnologia</AreaTitle>
                    <Description marginBottomMobile={32} marginBottomDesktop={36}>É a nossa maior área, responsável por <b>dinamizar a plataforma</b> através das linguagens de programação (front e back-end) e por cuidar da <b>arquitetura e da infraestrutura</b> dos nossos produtos. Além disso, se encarregam de <b>manter</b> e <b>melhorar</b> os produtos, mapear e garantir o desenvolvimento de <b>novas funcionalidades</b> e assegurar uma <b>boa experiência</b> para as pessoas usuárias.</Description>
                    <ButtonSecondary>Ver vagas de Tecnologia</ButtonSecondary>
                </AreaContent>
            </Area>
            <Area maxWidth={957} margin="0 53px 0 0">
                <AreaImg image="./images/area-comercial.svg" />
                <AreaContent>
                    <AreaTitle>Comercial</AreaTitle>
                    <Description marginBottomMobile={32} marginBottomDesktop={36}>O Comercial é a ponte entre nosso produto e o mundo, responsável por promover ações que visam <b>difundir nossa marca</b> e nos conectar com <b>potenciais clientes</b>. Essa área é composta por <b>Vendas</b>, <b>Customer Success (CS)</b>, <b>Marketing</b> e <b>Suporte ao Cliente</b>.</Description>
                    <ButtonSecondary>Ver vagas de Comercial</ButtonSecondary>
                </AreaContent>
            </Area>
            <Area maxWidth={972} margin="0 0 0 127px">
                <AreaImg image="./images/area-gente-gestao.svg" />
                <AreaContent>
                    <AreaTitle>Gente & Gestão</AreaTitle>
                    <Description marginBottomMobile={32} marginBottomDesktop={36}>A área reúne <b>Pessoas</b>, <b>Planejamento & Gestão</b> e <b>Financeiro</b>. Os times são responsáveis por trazer mais FERAs, cuidam da gestão do clima e do desenvolvimento das pessoas, definem os caminhos a serem tomados e administram os recursos financeiros da nossa empresa.</Description>
                    <ButtonSecondary>Ver vagas de Gente & Gestão</ButtonSecondary>
                </AreaContent>
            </Area>
        </AreaWrapper>
    </Section>
)

const Section = styled.section`
    margin: 0 auto;
    padding: 0 16px;
    max-width: 1440px;
    
    @media only screen and (min-width: 1024px) {
        margin: 0 auto;
        padding: 0 72px;
    }
`

const Title = styled.h2`
    color: ${COLORS.NAVY_DARK};
    margin: 0 0 20px;
    font-size: 22px;
    line-height: 33px;
    font-weight: 700;

    @media only screen and (min-width: 1024px) {
        font-size: 36px;
        line-height: 54px;
        margin: 0 0 24px;
    }
`

const Description = styled.p<{ marginBottomMobile: number, marginBottomDesktop: number }>`
    color: ${COLORS.GRAY_4};
    margin: 0 0 ${({ marginBottomMobile }) => GRID(marginBottomMobile / 8)};
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    
    b {
        color: ${COLORS.NAVY_DARK};
        font-weight: 700;
    }

    @media only screen and (min-width: 1024px) {
        margin: 0 0 ${({ marginBottomDesktop }) => GRID(marginBottomDesktop / 8)};
    }
`

const AreaWrapper = styled.div`
    gap: 32px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    
    @media only screen and (min-width: 1024px) {
        gap: 80px;
    }

    > div { 
        &:nth-child(even) {
            align-self: flex-end;
        }
    }
`

const Area = styled.div<{ maxWidth: number, margin: string }>`
    display: flex;
    flex-direction: column;

    padding: 24px 20px;
    box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.16);
    border-radius: 8px;
    background-color: ${COLORS.WHITE};
    
    @media only screen and (min-width: 1024px) {
        gap: 60px;
        border: 1px solid #EFF0F2;
        margin: ${({ margin }) => margin};
        padding: 32px 54px;
        max-width: ${({ maxWidth }) => GRID(maxWidth / 8)};
        box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.05);
        align-items: center;
        flex-direction: row;
    }
`

const AreaContent = styled.div`
    @media only screen and (min-width: 1024px) {
        width: calc(100% - 200px);
    }
`

const AreaImg = styled.div<{ image: string }>`
    width: 80px;
    height: 80px;
    margin: 0 0 32px;
    background-size: 90%;
    background-image: url(${({ image }) => image});
    background-repeat: no-repeat;
    background-position: center;

    @media only screen and (min-width: 1024px) {
        width: 250px;
        margin: 0;
        height: 210px;
    }
`

const AreaTitle = styled.div`
    color: ${COLORS.NAVY_DARK};
    margin: 0 0 8px;
    font-size: 22px;
    line-height: 33px;
    font-weight: 700;

    @media only screen and (min-width: 1024px) {
        font-size: 30px;
        line-height: 45px;
        margin: 0 0 16px;
    }
`

export default Areas;