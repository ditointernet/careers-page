import React from "react";
import { COLORS, GRID } from "@ditointernet/uai-foundation";
import styled from "styled-components";

const Screening = () => {
    return (
        <Section id="processo-seletivo">
            <Title>Nosso processo seletivo</Title>
            <Description>Entrevista inicial, entrevista técnica, desafio, entrevista de cultura, proposta e admissão. Saiba mais sobre as etapas necessárias para entrar para o nosso <b>time de FERAs.</b></Description>
            <SubTitle number="01">Conversa inicial</SubTitle>
            <Description>Depois do nosso primeiro contato, seja por cadastro, LinkedIn ou outra via, partimos para a nossa entrevista inicial ou vamos direto para a entrevista técnica.<br /><br />Essa é a oportunidade para você mostrar seus conhecimentos e suas competências, contar sobre sua trajetória profissional e sobre o que você busca para sua carreira, especialmente, aqui na Dito.</Description>
            <SubTitle number="02">Apresentação do desafio</SubTitle>
            <Description>Pode ser que a gente peça para você realizar um desafio – uma forma de entender melhor como você desenvolve seu trabalho.</Description>
            <SubTitle number="03">Entrevista de cultura</SubTitle>
            <Description>Correndo tudo bem, avançamos para a entrevista de cultura. Durante essa conversa, vamos identificando se o nosso jeito de trabalhar e os nossos valores fazem sentido para você.<br /><br />E, claro, se essa parceria tem tudo para ser especial, para as duas partes.</Description>
            <SubTitle number="04">Deu match!</SubTitle>
            <Description>Deu match! Agora falta pouco. Fazemos uma proposta para você e, se entrarmos em um acordo, chegamos no grande momento: a admissão.</Description>
            <Description><b>Ah, importante:</b> independentemente do resultado, sempre damos retorno – e o mais rápido possível. Essa é mais uma forma de mostrarmos que, de fato, nos importamos com as pessoas e com a experiência delas com a gente.</Description>
        </Section>
    );
}

const Section = styled.section`
    margin: 0 0 96px;
    padding: 96px ${GRID(2)} 0;
`

const Title = styled.h2`
    color: ${COLORS.NAVY_DARK};
    margin: 0 0 ${GRID(2)};
    font-size: 22px;
    font-weight: 700;
    line-height: 33px;
`

const SubTitle = styled.h3<{ number: string }>`
    color: ${COLORS.GREEN_MAIN};
    margin: 0 0 ${GRID(2)};
    padding: 27px 0 0 ${GRID(2)};
    position: relative;
    font-size: 22px;
    font-weight: 700;
    line-height: 33px;

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
    }
`

const Description = styled.p`
    color: ${COLORS.GRAY_4};
    margin: 0 0 88px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;

    b {
        color: ${COLORS.NAVY_DARK};
        font-weight: 700;
    }
`

export default Screening;