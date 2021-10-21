import React from "react";
import styled from "styled-components"
import CardsList from "@/components/CardsList";
import { COLORS, GRID } from "@ditointernet/uai-foundation";

type Card = {
    img: string,
    title: string,
    description: string,
}

const Benefits = () => {
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
            title: "Bônus anual",
            description: "Bônus anual por atingimento de metas, afinal, esses são os resultados do seu trabalho.",
        },
    ];

    return (
        <Section id="beneficios">
            <Title>Nossos benefícios</Title>
            <CardsList cards={cards} minMobileHeight={370} />
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

export default Benefits;