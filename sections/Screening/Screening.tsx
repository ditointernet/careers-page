import React from "react";
import styled from "styled-components";
import { COLORS, GRID } from "@ditointernet/uai-foundation";

const Screening = () => {
    return (
        <Section id="processo-seletivo">
            <SectionWrapper>
                <Fragment maxWidth={795}>
                    <Title>Nosso processo seletivo</Title>
                    <Description>Entrevista inicial, entrevista técnica, desafio, entrevista de cultura, proposta e admissão. Saiba mais sobre as etapas necessárias para entrar para o nosso <b>time de FERAs.</b></Description>
                </Fragment>
                <Fragment className="phases" maxWidth={816}>
                    <SubTitle number="01">Conversa inicial</SubTitle>
                    <Description>Depois do nosso primeiro contato, seja por cadastro, LinkedIn ou outra via, partimos para a nossa entrevista inicial ou vamos direto para a entrevista técnica.<br /><br />Essa é a oportunidade para você mostrar seus conhecimentos e suas competências, contar sobre sua trajetória profissional e sobre o que você busca para sua carreira, especialmente, aqui na Dito.</Description>
                </Fragment>
                <Fragment className="phases" maxWidth={639}>
                    <SubTitle number="02">Apresentação do desafio</SubTitle>
                    <Description>Pode ser que a gente peça para você realizar um desafio – uma forma de entender melhor como você desenvolve seu trabalho.</Description>
                </Fragment>
                <Fragment className="phases" maxWidth={709}>
                    <SubTitle number="03">Entrevista de cultura</SubTitle>
                    <Description>Correndo tudo bem, avançamos para a entrevista de cultura. Durante essa conversa, vamos identificando se o nosso jeito de trabalhar e os nossos valores fazem sentido para você.<br /><br />E, claro, se essa parceria tem tudo para ser especial, para as duas partes.</Description>
                </Fragment>
                <Fragment className="phases" maxWidth={770}>
                    <SubTitle number="04">Deu match!</SubTitle>
                    <Description>Deu match! Agora falta pouco. Fazemos uma proposta para você e, se entrarmos em um acordo, chegamos no grande momento: a admissão.</Description>
                </Fragment>
                <Description><b>Ah, importante:</b> independentemente do resultado, sempre damos retorno – e o mais rápido possível. Essa é mais uma forma de mostrarmos que, de fato, nos importamos com as pessoas e com a experiência delas com a gente.</Description>
            </SectionWrapper>
        </Section>
    );
}

const Section = styled.section`
    position: relative;

    @media only screen and (min-width: 1024px) {
        &::before {
            top: 630px;
            left: 0;
            z-index: -1;
            content: url('./images/screening-left.svg');
            position: absolute;
        }

        &::after {
            top: 310px;
            right: 0;
            z-index: -1;
            content: url('./images/screening-right.svg');
            position: absolute;
        }
    }
`

const SectionWrapper = styled.div`
    margin: 0 0 96px;
    padding: 96px ${GRID(2)} 0;
    max-width: ${GRID(180)};

    @media only screen and (min-width: 1024px) {
        margin: 0 auto;
        display: flex;
        padding: ${GRID(20)} ${GRID(9)} ${GRID(15)};
        flex-direction: column;
        
        > div {
            &:first-child {
                p {
                    padding: 0;
                }
            }
            &:nth-child(2) {
                margin-left: 66px;
            }
            &:nth-child(3) {
                margin-right: 158px;
            }
            &:nth-child(4) {
                margin-left: 26px;
            }
            &:nth-child(5) {
                margin-right: 27px;
            }
        }

        .phases {
            &:nth-child(odd) {
                align-self: flex-end;
            }
        }

        > p {
            margin: 0 auto;
            padding: 0;
            max-width: 1043px;
            text-align: center;
        }
    }

`

const Fragment = styled.div<{ maxWidth: number }>`
    margin: 0 0 88px;
    max-width: ${({ maxWidth }) => GRID(maxWidth / 8)};

    @media only screen and (min-width: 1024px) {
        margin: 0 0 130px;
    }
`

const Title = styled.h2`
    color: ${COLORS.NAVY_DARK};
    margin: 0 0 ${GRID(2)};
    font-size: 22px;
    font-weight: 700;
    line-height: 33px;

    @media only screen and (min-width: 1024px) {
        margin: 0 0 ${GRID(3)};
        font-size: 36px;
        line-height: 54px;
    }
`

const SubTitle = styled.h3<{ number: string }>`
    color: ${COLORS.GREEN_MAIN};
    margin: 0 0 ${GRID(2)};
    padding: 27px 0 0 ${GRID(2)};
    position: relative;
    font-size: 22px;
    font-weight: 700;
    line-height: 33px;

    @media only screen and (min-width: 1024px) {
        padding: 52px 0 0 29px;
        font-size: 28px;
        line-height: 42px;
    }

    ::before {
        top: 0;
        left: 0;
        color: ${COLORS.NAVY_LIGHT};
        z-index: -1;
        content: "${({ number }) => number}";
        position: absolute;
        font-size: 36px;
        font-weight: 700;
        line-height: 54px;

        @media only screen and (min-width: 1024px) {
            font-size: 64px;
            line-height: 96px;
        }
    }
`

const Description = styled.p`
    color: ${COLORS.GRAY_4};
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;

    b {
        color: ${COLORS.NAVY_DARK};
        font-weight: 700;
    }

    @media only screen and (min-width: 1024px) {
        padding: 0 0 0 40px;
    }
`

export default Screening;