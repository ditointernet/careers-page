import React from 'react';
import styled from 'styled-components'
import { COLORS, GRID } from '@ditointernet/uai-foundation';

const Tech = () => (
    <Section>
        <Title>Já somos uma grande Martech* e não paramos de crescer.</Title>
        <Container>
            <Description style={{ marginBottom: '71px' }} className="arrowRight">A plataforma Dito foi toda desenvolvida internamente, com <b>~/tecnologia própria/~</b>, e impacta <b>~/milhões de consumidores/~</b> por mês, de forma inteligente e multicanal.</Description>
            <WrapperBoxes>
                <Description>Hoje usamos tecnologias como:</Description>
                <Box>
                    <BoxContent>
                        <BoxItem>Golang</BoxItem>
                        <BoxItem className="hyphen">Kubernetes</BoxItem>
                        <BoxItem className="hyphen">Elasticsearch (cluster de 210 bilhoes de documentos)</BoxItem>
                        <BoxItem className="hyphen">Kinesis</BoxItem>
                        <BoxItem>AWS e GCP como cloud</BoxItem>
                    </BoxContent>
                </Box>
                <Description>Além de:</Description>
                <Box>
                    <BoxContent>
                        <BoxItem>React</BoxItem>
                        <BoxItem className="hyphen">Design System próprio (DitoUAI)</BoxItem>
                        <BoxItem className="hyphen">Typescript</BoxItem>
                        <BoxItem className="hyphen">Styled-components</BoxItem>
                        <BoxItem>Redux</BoxItem>
                    </BoxContent>
                </Box>
            </WrapperBoxes>
            <WrapperNumbers>
                <Description>Alguns dos nossos números:</Description>
                <Description className="contrast blue">São <b>676 rotinas periódicas</b> e mais de <b>180 microsserviços</b>, totalizando <b>284 instâncias</b>, rodando em <b>58 máquinas</b>.</Description>
                <Description className="blue">Ah, e se você ainda não domina a linguagem <b>Go (Golang)</b>, mas tem muita vontade, não se preocupe porque a gente tem todo o prazer em ensinar. A maior parte do nosso time aprendeu aqui mesmo.</Description>
                <Description>Por aqui, a gente valoriza tanto o aprendizado que ele faz parte da nossa rotina. Além do nosso code review, em que todo o time aproveita para tirar dúvidas, temos o hackathon, um momento de troca livre de experiências e conhecimentos para propormos soluções para melhorar processos, códigos etc.</Description>
            </WrapperNumbers>
        </Container>
    </Section>
);

const Section = styled.section`
    padding: 0 16px 20px;
    position: relative;
    margin-top: 46px;
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

const Title = styled.h2`
    font-size: 22px;
    font-weight: 700;
    line-height: 33px;
    background: linear-gradient(271.75deg, #0fe38a 16.6%, #85ffc4 89.72%);
    margin-bottom: 33px;
    background-clip: text;
    -ms-background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const Container = styled.div`
    padding: 0 0 40px 22px;
    position: relative;
    border-left: 1px solid #6A7486;
    border-image: linear-gradient(to bottom, #121A2D 22px, #6A7486 0,#6A7486 calc(100% - 22px),#121A2D 0);
    border-image-slice: 1;

    &::before {
        top: 6px;
        left: -6px;
        width: 9px;
        height: 9px;
        border: 1px solid #6A7486;
        content: '';
        position: absolute;
        border-radius: 100%;
        background-color: #121A2D;
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
        background-color: #121A2D;
    }
`

const WrapperBoxes = styled.div`
    gap: 36px;
    margin: 0 0 55px 0;
    display: flex;
    flex-direction: column;
`

const WrapperNumbers = styled.div`
    gap: 32px;
    display: flex;
    flex-direction: column;
`

const Description = styled.p`
    color: ${COLORS.GRAY_1};
    position: relative;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;

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
    }

    &.blue {
        b {
            color: #00FFF0;
            font-weight: 700;
        }
    }
`

const Box = styled.div`
    border: 1px solid #2E384E;
    padding: 20px 16px 20px 26px;
    position: relative;
    background: #0D1425;
    box-sizing: border-box;
    box-shadow: 0px 7px 20px -2px rgba(0, 0, 0, 0.8);
    border-radius: 16px;

    &::before {
        top: calc(50% - 24px);
        left: -23px;
        width: 17px;
        height: 36px;
        content: "";
        position: absolute;
        background-size: cover;
        background-image: url('./icons/link-left.svg');
        background-repeat: no-repeat;
        background-position-x: right;
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