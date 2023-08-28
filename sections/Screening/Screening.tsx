import styled from "styled-components";
import { COLORS_NEXT, GRID } from "@ditointernet/uai-foundation";

const Screening = () => {
    return (
        <Section id="nosso-processo-seletivo">
            <SectionWrapper>
                <Content maxWidth={795}>
                    <Title>Nosso processo seletivo</Title>
                    <Description>Entrevista inicial, entrevista técnica (para alguns casos), desafio, entrevista de cultura, proposta e admissão. Saiba mais sobre as etapas necessárias para entrar para o nosso <b>time de FERAs.</b></Description>
                </Content>
                <Content className="phases" maxWidth={815}>
                    <SubTitle number="01">Conversa inicial</SubTitle>
                    <Description>Depois do nosso primeiro contato, seja por cadastro, LinkedIn ou outra via, partimos para a nossa <b>entrevista inicial</b>. Um papo bem informal e sem roteiro, uma oportunidade de nos conhecermos. É aqui que apresentamos o desafio para você.</Description>
                </Content>
                <Content className="phases" maxWidth={644}>
                    <SubTitle number="02">Entrevista técnica</SubTitle>
                    <Description>Pode acontecer de, após o primeiro contato, irmos direto para a <b>entrevista técnica</b>. Nesse momento, você deve <b>mostrar seus conhecimentos</b> e suas competências, contar sobre sua trajetória profissional e sobre o que você busca para sua carreira, especialmente, aqui na Dito.</Description>
                </Content>
                <Content className="phases" maxWidth={706}>
                    <SubTitle number="03">Apresentação do desafio</SubTitle>
                    <Description>Pode ser que a gente peça para você realizar um <b>desafio</b> – uma forma de entender melhor como você desenvolve seu trabalho. Se você é uma pessoa desenvolvedora, não vai passar por essa etapa, ok?</Description>
                </Content>
                <Content className="phases" maxWidth={775}>
                    <SubTitle number="04">Entrevista de cultura</SubTitle>
                    <Description>Correndo tudo bem, avançamos para a <b>entrevista de cultura</b>. Durante essa conversa, vamos identificando se o nosso jeito de trabalhar e os nossos valores fazem sentido para você. E, claro, se essa parceria tem tudo para ser especial, para as duas partes.</Description>
                </Content>
                <Content className="phases" maxWidth={775}>
                    <SubTitle number="05">Deu match!</SubTitle>
                    <Description>Agora falta pouco. Fazemos uma <b>proposta</b> para você e, se entrarmos em um acordo, chegamos no grande momento: <b>a admissão</b>.</Description>
                </Content>
                <Content className="phases" maxWidth={775}>
                    <SubTitle number="06">Envio de documentação</SubTitle>
                    <Description>Aí é correr pro abraço! Você <b>envia os seus documentos</b> e nós enviamos seu material de trabalho e mais alguns brindes para já ir entrando no clima. E deixamos tudo no jeito: além dos <b>nossos onboardings</b>, criamos um documento que conta o que esperamos de você logo nos primeiros meses para você saber por onde começar. Spoiler: Vai ser incrível!</Description>
                </Content>
                <Description><b>Ah, importante:</b> independentemente do resultado, sempre damos <b>retorno</b> – e o mais rápido possível. Essa é mais uma forma de mostrarmos que, de fato, nos importamos com as pessoas e com a experiência delas com a gente.</Description>
            </SectionWrapper>
        </Section>
    );
}

const Section = styled.section`
    margin: ${GRID(1)} 0;
    position: relative;

    @media only screen and (min-width: 1024px) {
        margin: ${GRID(2)} 0;

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
    margin: 0 auto;
    padding: ${GRID(8)} ${GRID(2)};
    max-width: ${GRID(180)};

    @media only screen and (min-width: 1024px) {
        display: flex;
        padding: ${GRID(10)} ${GRID(9)};
        flex-direction: column;
        
        > div {
            &:first-child {
                p {
                    padding: 0;
                }
            }
            &:nth-child(even) {
                margin-left: ${GRID(8.25)};
            }
            &:nth-child(3) {
                margin-right: ${GRID(19.75)};
            }
            &:nth-child(5) {
                margin-right: ${GRID(3.375)};
            }
            &:nth-child(7) {
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
    color: ${COLORS_NEXT.BRAND.NAVY_900};
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
    color: ${COLORS_NEXT.BRAND.GREEN_600};
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
        color: ${COLORS_NEXT.BRAND.NAVY_100};
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
    color: ${COLORS_NEXT.NEUTRAL_400};
    margin: 0;
    font-size: ${GRID(2)};
    font-weight: 500;
    line-height: ${GRID(3)};

    b {
        color: ${COLORS_NEXT.BRAND.NAVY_900};
        font-weight: 700;
    }

    @media only screen and (min-width: 1024px) {
        padding: 0 0 0 ${GRID(5)};
    }
`

export default Screening;