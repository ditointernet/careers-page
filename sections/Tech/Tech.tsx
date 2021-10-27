import React from "react";
import styled from "styled-components"
import { COLORS, GRID } from "@ditointernet/uai-foundation";

const Tech = () => (
    <Section>
        <SectionWrapper>
            <Title>Já somos uma grande Martech* e não paramos de crescer.</Title>
            <Container>
                <Description marginBottomMobile={71} marginBottomDesktop={48} maxWidth={694} className="arrowRight">A plataforma Dito foi toda desenvolvida internamente, com <b>~/tecnologia própria/~</b>, e impacta <b>~/milhões de consumidores/~</b> por mês, de forma inteligente e multicanal.</Description>
                <MainWrapper>
                    <BoxesWrapper>
                        <Description marginBottomMobile={25} marginBottomDesktop={36}>Hoje usamos tecnologias como:</Description>
                        <BoxShadow>
                            <Box>
                                <BoxContent>
                                    <BoxItem>Golang</BoxItem>
                                    <BoxItem className="hyphen">Kubernetes</BoxItem>
                                    <BoxItem className="hyphen">Elasticsearch (cluster de 210 bilhoes de documentos)</BoxItem>
                                    <BoxItem className="hyphen">Kinesis</BoxItem>
                                    <BoxItem>AWS e GCP como cloud</BoxItem>
                                </BoxContent>
                            </Box>
                        </BoxShadow>
                        <Description marginBottomMobile={25} marginBottomDesktop={36}>Além de:</Description>
                        <BoxShadow>
                            <Box>
                                <BoxContent>
                                    <BoxItem>React</BoxItem>
                                    <BoxItem className="hyphen">Design System próprio (DitoUAI)</BoxItem>
                                    <BoxItem className="hyphen">Typescript</BoxItem>
                                    <BoxItem className="hyphen">Styled-components</BoxItem>
                                    <BoxItem>Redux</BoxItem>
                                </BoxContent>
                            </Box>
                        </BoxShadow>
                    </BoxesWrapper>
                    <NumbersWrapper>
                        <Description marginBottomMobile={24} marginBottomDesktop={20} className="indicator">Alguns dos nossos números:</Description>
                        <Description marginBottomMobile={32} marginBottomDesktop={40} className="contrast blue" maxWidth={750}>São <b>676 rotinas periódicas</b> e mais de <b>180 microsserviços</b>, totalizando <b>284 instâncias</b>, rodando em <b>58 máquinas</b>.</Description>
                        <Description marginBottomMobile={24} marginBottomDesktop={24} className="blue" maxWidth={622}>Ah, e se você ainda não domina a linguagem <b>Go (Golang)</b>, mas tem muita vontade, não se preocupe porque a gente tem todo o prazer em ensinar. A maior parte do nosso time aprendeu aqui mesmo.</Description>
                        <Description marginBottomMobile={36} maxWidth={622}>Por aqui, a gente valoriza tanto o aprendizado que ele faz parte da nossa rotina. Além do nosso code review, em que todo o time aproveita para tirar dúvidas, temos o hackathon, um momento de troca livre de experiências e conhecimentos para propormos soluções para melhorar processos, códigos etc.</Description>
                    </NumbersWrapper>
                </MainWrapper>
            </Container>
        </SectionWrapper>
    </Section>
);

const Section = styled.section`
    position: relative;
    background-color: #121A2D;

    &:before {
        top: -80px;
        left: 0;
        width: 100%;
        height: 80px;
        content: "";
        position: absolute;
        background-size: 100%;
        background-image: url('./images/navigation-top.svg');
        background-repeat: no-repeat;
    }

    &:after {
        left: 0;
        width: 100%;
        height: 80px;
        bottom: -80px;
        content: "";
        position: absolute;
        background-size: 100%;
        background-image: url('./images/navigation-down.svg');
        background-repeat: no-repeat;
    }
`

const SectionWrapper = styled.div`
    margin: 0 auto;
    padding: 40px 16px;
    max-width: 1440px;

    @media only screen and (min-width: 1024px) {
        padding: 70px 72px;
    }
`

const Title = styled.h2`
    font-size: 22px;
    font-weight: 700;
    line-height: 33px;
    background: linear-gradient(271.75deg, #0fe38a 16.6%, #85ffc4 89.72%);
    margin: 0 0 33px 0;
    background-clip: text;
    -ms-background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media only screen and (min-width: 1024px) {
        margin: 0 0 76px 0;
        font-size: 36px;
        max-width: 675px;
        line-height: 54px;
    }
`

const Container = styled.div`
    padding: 0 0 0 22px;
    position: relative;
    border-left: 1px solid #6A7486;
    border-image: linear-gradient(to bottom, #121A2D 22px, #6A7486 0,#6A7486 calc(100% - 22px),#121A2D 0);
    border-image-slice: 1;
    
    @media only screen and (min-width: 1024px) {
        padding: 0 0 0 24px;
    }

    &::before {
        top: 6px;
        left: -6px;
        width: 9px;
        height: 9px;
        border: 1px solid #6A7486;
        content: '';
        position: absolute;
        border-radius: 100%;
    }

    &::after {
        left: -6px;
        width: 9px;
        bottom: 6px;
        height: 9px;
        border: 1px solid #6A7486;
        content: '';
        position: absolute;
        border-radius: 100%;
    }
`

const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 1024px) {
        gap: 108px;
        flex-direction: row;
    }
`

const BoxesWrapper = styled.div`
    margin: 0 0 19px 0;
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 1024px) {
        margin: 0;
    }
`

const NumbersWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 1024px) {
        padding: 81px 0 0 0;
    }
`

const Description = styled.p<{
    maxWidth?: number,
    marginBottomMobile?: number,
    marginBottomDesktop?: number
}>`
    color: ${COLORS.GRAY_1};
    margin: 0 0 ${({ marginBottomMobile }) => marginBottomMobile ? GRID(marginBottomMobile / 8) : 0} 0;
    position: relative;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;

    @media only screen and (min-width: 1024px) {
        margin: 0 0 ${({ marginBottomDesktop }) => marginBottomDesktop ? GRID(marginBottomDesktop / 8) : 0} 0;
        max-width: ${({ maxWidth }) => maxWidth ? GRID(maxWidth / 8) : "max-content"};
    }

    b {
        color: ${COLORS.GREEN_MAIN};
        font-weight: 600;
    }

    &.arrowRight {
        &::before {
            top: 0;
            left: -14px;
            content: url('./icons/navigation-arrow-right.svg');
            position: absolute;
        }
    }

    &.contrast {
        font-size: 22px;
        line-height: 36px;

        @media only screen and (min-width: 1024px) {
            font-size: 28px;
            line-height: 42px;
        }
    }

    &.blue {
        b {
            color: #00FFF0;
            font-weight: 700;
        }
    }
    
    &.indicator {
        @media only screen and (min-width: 1024px) {
            position: inherit;
            
            &::before {
                top: 187px;
                left: 0px;
                width: 500px;
                height: 1px;
                content: '';
                position: absolute;
                border-top: 1px solid #6A7486;
            }

            &::after {
                top: 183px;
                left: 504px;
                width: 8px;
                height: 8px;
                border: 1px solid #6A7486;
                content: '';
                position: absolute;
                border-radius: 100%;
                background-color: #121A2D;
            }
        }
    }
`
const BoxShadow = styled.div`
    width: 100%;
    margin: 0 0 36px 0;
    z-index: 1;
    position: relative;
    max-width: 356px;
    
    @media only screen and (min-width: 1024px) {
        width: 356px;
        margin: 0 0 48px 34px;
    }

    &::before {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        content: '';
        position: absolute;
        border-radius: 100%;
        box-shadow: 0px 0px 61px 20px rgba(3, 255, 210, 0.2);
    }

`

const Box = styled.div`
    width: 100%;
    border: 1px solid #2E384E;
    padding: 20px 16px 20px 26px;
    position: relative;
    box-sizing: border-box;
    box-shadow: 0px 7px 20px -2px rgba(0, 0, 0, 0.8);
    border-radius: 16px;
    background-color: #0D1425;

    &::before {
        top: calc(50% - 24px);
        left: -23px;
        width: 17px;
        height: 36px;
        content: "";
        position: absolute;
        background-size: cover;
        background-image: url('./icons/mobile-link-left.svg');
        background-repeat: no-repeat;
        background-position-x: right;

        @media only screen and (min-width: 1024px) {
            top: calc(50% - 72px);
            left: -60px;
            width: 50px;
            height: 82px;
            background-image: url('./icons/desktop-link-left.svg');
        }
    }
`

const BoxContent = styled.div`
    position: relative;
    border-left: 1px solid #6A7486;
    border-image: linear-gradient(to bottom, #121A2D 22px, #6A7486 0,#6A7486 calc(100% - 22px),#121A2D 0);
    border-image-slice: 1;

    p {
        &:last-child {
            margin: 0;
        }
    }

    &::before {
        top: 6px;
        left: -6px;
        width: 12px;
        height: 12px;
        content: "";
        position: absolute;
        background-size: 100%;
        background-image: url('./icons/navigation-arrow-right.svg');
        background-repeat: no-repeat;
    }

    &::after {
        left: -6px;
        width: 12px;
        bottom: 6px;
        height: 12px;
        content: "";
        position: absolute;
        background-size: 100%;
        background-image: url('./icons/chevron-right.svg');
        background-repeat: no-repeat;
    }
`

const BoxItem = styled.p`
    color: ${COLORS.GRAY_2};
    padding: 0 0 0 12px;
    margin: 0 0 24px 0;
    position: relative;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;

    &.hyphen {
        &::before {
            top: 1px;
            left: -1px;
            color: #6A7486;
            content: '-';
            position: absolute;
        }
    }
`

export default Tech;