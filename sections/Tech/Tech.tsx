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
`

const SectionWrapper = styled.div`
    margin: 0 auto;
    padding: ${GRID(5)} ${GRID(2)};
    max-width: ${GRID(180)};

    @media only screen and (min-width: 1024px) {
        padding: ${GRID(8.75)} ${GRID(9)};
    }
`

const Title = styled.h2`
    font-size: ${GRID(2.75)};
    font-weight: 700;
    line-height: ${GRID(4.125)};
    background: linear-gradient(271.75deg, #0fe38a 16.6%, #85ffc4 89.72%);
    margin: 0 0 ${GRID(4.125)} 0;
    background-clip: text;
    -ms-background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media only screen and (min-width: 1024px) {
        margin: 0 0 ${GRID(9.5)} 0;
        font-size: ${GRID(4.5)};
        max-width: ${GRID(84.375)};
        line-height: ${GRID(6.75)};
    }
`

const Container = styled.div`
    padding: 0 0 0 ${GRID(2.75)};
    position: relative;
    border-left: ${GRID(0.125)} solid #6A7486;
    border-image: linear-gradient(to bottom, #121A2D ${GRID(2.75)}, #6A7486 0,#6A7486 calc(100% - ${GRID(2.75)}),#121A2D 0);
    border-image-slice: 1;
    
    @media only screen and (min-width: 1024px) {
        padding: 0 0 0 ${GRID(3)};
    }

    &::before {
        top: ${GRID(0.75)};
        left: -${GRID(0.75)};
        width: ${GRID(1.125)};
        height: ${GRID(1.125)};
        border: ${GRID(0.125)} solid #6A7486;
        content: '';
        position: absolute;
        border-radius: 100%;
    }

    &::after {
        left: -${GRID(0.75)};
        width: ${GRID(1.125)};
        bottom: ${GRID(0.75)};
        height: ${GRID(1.125)};
        border: ${GRID(0.125)} solid #6A7486;
        content: '';
        position: absolute;
        border-radius: 100%;
    }
`

const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 1024px) {
        gap: ${GRID(13.5)};
        flex-direction: row;
    }
`

const BoxesWrapper = styled.div`
    margin: 0 0 ${GRID(2.375)} 0;
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
        padding: ${GRID(10.125)} 0 0 0;
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
    font-size: ${GRID(2)};
    font-weight: 500;
    line-height: ${GRID(3)};

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
            left: -${GRID(1.75)};
            content: url('./icons/navigation-arrow-right.svg');
            position: absolute;
        }
    }

    &.contrast {
        font-size: ${GRID(2.75)};
        line-height: ${GRID(4.5)};

        @media only screen and (min-width: 1024px) {
            font-size: ${GRID(3.5)};
            line-height: ${GRID(5.25)};
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
                top: ${GRID(23.375)};
                left: 0;
                width: ${GRID(62.5)};
                height: ${GRID(0.125)};
                content: '';
                position: absolute;
                border-top: ${GRID(0.125)} solid #6A7486;
            }

            &::after {
                top: ${GRID(22.875)};
                left: ${GRID(22.875)};
                width: ${GRID(1)};
                height: ${GRID(1)};
                border: ${GRID(0.125)} solid #6A7486;
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
    margin: 0 0 ${GRID(4.5)} 0;
    z-index: 1;
    position: relative;
    max-width: ${GRID(44.5)};
    
    @media only screen and (min-width: 1024px) {
        width: ${GRID(44.5)};
        margin: 0 0 ${GRID(6)} ${GRID(4.25)};
    }

    &::before {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        content: '';
        position: absolute;
        border-radius: 100%;
        box-shadow: 0 0 ${GRID(7.625)} ${GRID(2.5)} rgba(3, 255, 210, 0.2);
    }

`

const Box = styled.div`
    width: 100%;
    border: ${GRID(0.125)} solid #2E384E;
    padding: ${GRID(2.5)} ${GRID(2)} ${GRID(2.5)} ${GRID(3.25)};
    position: relative;
    box-sizing: border-box;
    box-shadow: 0 ${GRID(0.875)} ${GRID(2.5)} -${GRID(0.25)} rgba(0, 0, 0, 0.8);
    border-radius: ${GRID(2)};
    background-color: #0D1425;

    &::before {
        top: calc(50% - ${GRID(3)});
        left: -${GRID(2.875)};
        width: ${GRID(2.125)};
        height: ${GRID(4.5)};
        content: "";
        position: absolute;
        background-size: cover;
        background-image: url('./icons/mobile-link-left.svg');
        background-repeat: no-repeat;
        background-position-x: right;

        @media only screen and (min-width: 1024px) {
            top: calc(50% - ${GRID(9)});
            left: -${GRID(7.5)};
            width: ${GRID(6.25)};
            height: ${GRID(10.25)};
            background-image: url('./icons/desktop-link-left.svg');
        }
    }
`

const BoxContent = styled.div`
    position: relative;
    border-left: ${GRID(0.125)} solid #6A7486;
    border-image: linear-gradient(to bottom, #121A2D ${GRID(2.75)}, #6A7486 0,#6A7486 calc(100% - ${GRID(2.75)}),#121A2D 0);
    border-image-slice: 1;

    p {
        &:last-child {
            margin: 0;
        }
    }

    &::before {
        top: ${GRID(0.75)};
        left: -${GRID(0.75)};
        width: ${GRID(1.5)};
        height: ${GRID(1.5)};
        content: "";
        position: absolute;
        background-size: 100%;
        background-image: url('./icons/navigation-arrow-right.svg');
        background-repeat: no-repeat;
    }

    &::after {
        left: -${GRID(0.75)};
        width: ${GRID(1.5)};
        bottom: ${GRID(0.75)};
        height: ${GRID(1.5)};
        content: "";
        position: absolute;
        background-size: 100%;
        background-image: url('./icons/chevron-right.svg');
        background-repeat: no-repeat;
    }
`

const BoxItem = styled.p`
    color: ${COLORS.GRAY_2};
    padding: 0 0 0 ${GRID(1.5)};
    margin: 0 0 ${GRID(3)} 0;
    position: relative;
    font-size: ${GRID(2)};
    font-weight: 400;
    line-height: ${GRID(3)};

    &.hyphen {
        &::before {
            top: ${GRID(0.125)};
            left: -${GRID(0.125)};
            color: #6A7486;
            content: '-';
            position: absolute;
        }
    }
`

export default Tech;