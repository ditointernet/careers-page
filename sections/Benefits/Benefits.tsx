import React from 'react';
import styled from 'styled-components'

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
            title: "Bonûs anual",
            description: "Bônus anual por atingimento de metas, afinal, esses são os resultados do seu trabalho.",
        },
    ];

    return (
        <Section>
            <Title>Nossos benefícios</Title>
            <WrapperCards>
                {cards.map((card: Card, index: number) => (
                    <Card key={index}>
                        <CardImg style={{ backgroundImage: `url(${card.img})` }} />
                        <CardTitle>{card.title}</CardTitle>
                        <CardDescription>{card.description}</CardDescription>
                    </Card>
                ))}
            </WrapperCards>
        </Section>
    )
};

const Section = styled.section`
    margin: 40px auto 0;
    padding: 0 16px 112px;
    max-width: 1440px;

    background-image: url('./images/benefits.png');
    background-repeat: no-repeat;
    background-position-x: 85%;
    background-position-y: 100%;

    @media only screen and (min-width: 1366px) {
        margin: 80px auto 0px;
        padding: 0 72px 200px;
    }
`

const Title = styled.h2`
    font-size: 22px;
    line-height: 33px;
    font-weight: 700;
    margin: 0px 0px 40px;

    @media only screen and (min-width: 1366px) {
        font-size: 36px;
        line-height: 54px;
        margin: 0px 0px 112px;
    }
`

const WrapperCards = styled.div`
    gap: 24px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media only screen and (min-width: 1366px) {
    }
`

const Card = styled.div`
    border: 1px solid #E9E9E9;
    padding: 32px;
    max-width: calc(33% - 14px);
    border-radius: 24px;

    @media only screen and (min-width: 1366px) {
    }
`

const CardImg = styled.div`
    width: 96px;
    height: 96px;
    margin: 0px 0px 24px;
    background-size: cover;

    @media only screen and (min-width: 1366px) {
    }
`

const CardTitle = styled.h3`
    color: #223154;
    margin: 0px 0px 20px;
    font-size: 22px;
    font-weight: 700;
    line-height: 33px;
`

const CardDescription = styled.div`
    color: #8D95A7;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
`

export default Benefits;