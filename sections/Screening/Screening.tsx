import React from "react";
import styled from "styled-components";
import { COLORS, GRID } from "@ditointernet/uai-foundation";

const Screening = () => {
    return (
        <Section id="processo-seletivo">
            <SectionWrapper>
                <Content maxWidth={795}>
                    <Title>Nosso processo seletivo</Title>
                    <Description>Entrevista inicial, entrevista técnica, desafio, entrevista de cultura, proposta e admissão. Saiba mais sobre as etapas necessárias para entrar para o nosso <b>time de FERAs.</b></Description>
                </Content>
                <Content className="phases" maxWidth={816}>
                    <SubTitle number="01">Conversa inicial</SubTitle>
                    <Description>Depois do nosso primeiro contato, seja por cadastro, LinkedIn ou outra via, partimos para a nossa entrevista inicial ou vamos direto para a entrevista técnica.<br /><br />Essa é a oportunidade para você mostrar seus conhecimentos e suas competências, contar sobre sua trajetória profissional e sobre o que você busca para sua carreira, especialmente, aqui na Dito.</Description>
                </Content>
                <Content className="phases" maxWidth={639}>
                    <SubTitle number="02">Apresentação do desafio</SubTitle>
                    <Description>Pode ser que a gente peça para você realizar um desafio – uma forma de entender melhor como você desenvolve seu trabalho.</Description>
                </Content>
                <Content className="phases" maxWidth={709}>
                    <SubTitle number="03">Entrevista de cultura</SubTitle>
                    <Description>Correndo tudo bem, avançamos para a entrevista de cultura. Durante essa conversa, vamos identificando se o nosso jeito de trabalhar e os nossos valores fazem sentido para você.<br /><br />E, claro, se essa parceria tem tudo para ser especial, para as duas partes.</Description>
                </Content>
                <Content className="phases" maxWidth={770}>
                    <SubTitle number="04">Deu match!</SubTitle>
                    <Description>Deu match! Agora falta pouco. Fazemos uma proposta para você e, se entrarmos em um acordo, chegamos no grande momento: a admissão.</Description>
                </Content>
                <Description><b>Ah, importante:</b> independentemente do resultado, sempre damos retorno – e o mais rápido possível. Essa é mais uma forma de mostrarmos que, de fato, nos importamos com as pessoas e com a experiência delas com a gente.</Description>
            </SectionWrapper>
        </Section>
    );
}

const Section = styled.section`
    position: relative;

    @media only screen and (min-width: 1024px) {
        &::before {
            top: ${GRID(78.75)};
            left: 0;
            z-index: -1;
            content: url('./images/screening-left.svg');
            position: absolute;
        }

        &::after {
            top: ${GRID(38.75)};
            right: 0;
            z-index: -1;
            content: url('./images/screening-right.svg');
            position: absolute;
        }
    }
`

const SectionWrapper = styled.div`
    margin: 0 0 ${GRID(12)};
    padding: ${GRID(12)} ${GRID(2)} 0;
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
                margin-left: ${GRID(8.25)};
            }
            &:nth-child(3) {
                margin-right: ${GRID(19.75)};
            }
            &:nth-child(4) {
                margin-left: ${GRID(3.25)};
            }
            &:nth-child(5) {
                margin-right: ${GRID(3.375)};
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
            max-width: ${GRID(130.375)};
            text-align: center;
        }
    }

`

const Content = styled.div<{ maxWidth: number }>`
    margin: 0 0 ${GRID(11)};
    max-width: ${({ maxWidth }) => GRID(maxWidth / 8)};

    @media only screen and (min-width: 1024px) {
        margin: 0 0 ${GRID(16.25)};
    }
`

const Title = styled.h2`
    color: ${COLORS.NAVY_DARK};
    margin: 0 0 ${GRID(2)};
    font-size: ${GRID(2.75)};
    font-weight: 700;
    line-height: ${GRID(4.125)};

    @media only screen and (min-width: 1024px) {
        margin: 0 0 ${GRID(3)};
        font-size: ${GRID(4.5)};
        line-height: ${GRID(6.75)};
    }
`

const SubTitle = styled.h3<{ number: string }>`
    color: ${COLORS.GREEN_MAIN};
    margin: 0 0 ${GRID(2)};
    padding: ${GRID(3.375)} 0 0 ${GRID(2)};
    position: relative;
    font-size: ${GRID(2.75)};
    font-weight: 700;
    line-height: ${GRID(4.125)};

    @media only screen and (min-width: 1024px) {
        padding: ${GRID(6.5)} 0 0 ${GRID(3.625)};
        font-size: ${GRID(3.5)};
        line-height: ${GRID(5.25)};
    }

    ::before {
        top: 0;
        left: 0;
        color: ${COLORS.NAVY_LIGHT};
        z-index: -1;
        content: "${({ number }) => number}";
        position: absolute;
        font-size: ${GRID(4.5)};
        font-weight: 700;
        line-height: ${GRID(6.75)};

        @media only screen and (min-width: 1024px) {
            font-size: ${GRID(8)};
            line-height: ${GRID(12)};
        }
    }
`

const Description = styled.p`
    color: ${COLORS.GRAY_4};
    margin: 0;
    font-size: ${GRID(2)};
    font-weight: 500;
    line-height: ${GRID(3)};

    b {
        color: ${COLORS.NAVY_DARK};
        font-weight: 700;
    }

    @media only screen and (min-width: 1024px) {
        padding: 0 0 0 ${GRID(5)};
    }
`

export default Screening;