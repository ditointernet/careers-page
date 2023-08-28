import styled from "styled-components";
import { COLORS_NEXT, GRID } from "@ditointernet/uai-foundation";
import ButtonSecondary from "@/components/ButtonSecondary";
import { transparentize } from "utils/colors-utils";

const Areas = () => (
    <Section>
        <SectionWrapper>
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
                        <ButtonSecondary target="_black" href="https://dito.hire.trakstar.com/?team_id=5567&team_id=6345">Ver vagas de Tecnologia</ButtonSecondary>
                    </AreaContent>
                </Area>
                <Area maxWidth={957} margin="0 53px 0 0">
                    <AreaImg image="./images/area-comercial.svg" />
                    <AreaContent>
                        <AreaTitle>Comercial & Marketing</AreaTitle>
                        <Description marginBottomMobile={32} marginBottomDesktop={36}>O Comercial é a ponte entre nosso produto e o mundo, responsável por promover ações que visam <b>difundir nossa marca</b> e nos conectar com <b>potenciais clientes</b>. Essa área é composta por <b>Vendas</b>, <b>Customer Success (CS)</b>, <b>Marketing</b> e <b>Suporte ao Cliente</b>.</Description>
                        <ButtonSecondary target="_black" href="https://dito.hire.trakstar.com/?team_id=5436&team_id=17072&team_id=8496">Ver vagas de Comercial & Marketing</ButtonSecondary>
                    </AreaContent>
                </Area>
                <Area maxWidth={972} margin="0 0 0 127px">
                    <AreaImg image="./images/area-gente-gestao.svg" />
                    <AreaContent>
                        <AreaTitle>Gente & Gestão</AreaTitle>
                        <Description marginBottomMobile={32} marginBottomDesktop={36}>A área reúne <b>Pessoas</b>, <b>Planejamento & Gestão</b> e <b>Financeiro</b>. Os times são responsáveis por trazer mais FERAs, cuidam da gestão do clima e do desenvolvimento das pessoas, definem os caminhos a serem tomados e administram os recursos financeiros da nossa empresa.</Description>
                        <ButtonSecondary target="_black" href="https://dito.hire.trakstar.com/?team_id=26339&team_id=11035&team_id=27867&team_id=36065">Ver vagas de Gente & Gestão</ButtonSecondary>
                    </AreaContent>
                </Area>
            </AreaWrapper>
        </SectionWrapper>
    </Section>
)

const Section = styled.section`
    margin: ${GRID(1)} 0;
    background-size: cover;
    background-image: url("./images/areas-mb-bg.svg");
    background-repeat: no-repeat;
    background-position: inherit;
    
    @media only screen and (min-width: 1024px) {
        margin: ${GRID(2)} 0;
        background-image: url("./images/areas-bg.svg");
    }
`

const SectionWrapper = styled.div`
    margin: 0 auto;
    padding: ${GRID(8)} ${GRID(2)};
    max-width: ${GRID(180)};

    @media only screen and (min-width: 1024px) {
        margin: 0 auto;
        padding: ${GRID(10)} ${GRID(9)};
    }
`

const Title = styled.h2`
    color: ${COLORS_NEXT.BRAND.NAVY_900};
    margin: 0 0 ${GRID(2.5)};
    font-size: ${GRID(2.75)};
    line-height: ${GRID(4.125)};
    font-weight: 700;

    @media only screen and (min-width: 1024px) {
        font-size: ${GRID(4.5)};
        line-height: ${GRID(6.75)};
        margin: 0 0 ${GRID(3)};
    }
`

const Description = styled.p<{ marginBottomMobile: number, marginBottomDesktop: number }>`
    color: ${COLORS_NEXT.NEUTRAL_400};
    margin: 0 0 ${({ marginBottomMobile }) => GRID(marginBottomMobile / 8)};
    font-size: ${GRID(2)};
    font-weight: 500;
    line-height: ${GRID(3)};
    
    b {
        color: ${COLORS_NEXT.BRAND.NAVY_900};
        font-weight: 700;
    }

    @media only screen and (min-width: 1024px) {
        margin: 0 0 ${({ marginBottomDesktop }) => GRID(marginBottomDesktop / 8)};
    }
`

const AreaWrapper = styled.div`
    gap: ${GRID(4)};
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    
    @media only screen and (min-width: 1024px) {
        gap: ${GRID(10)};
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

    padding: ${GRID(3)} ${GRID(2.5)};
    box-shadow: 0 ${GRID(1)} ${GRID(4)} ${transparentize(COLORS_NEXT.BLACK, "0.16")};
    border-radius: ${GRID(1)};
    background-color: ${COLORS_NEXT.WHITE};
    
    @media only screen and (min-width: 1024px) {
        gap: ${GRID(7.5)};
        border: ${GRID(0.125)} solid #EFF0F2;
        margin: ${({ margin }) => margin};
        padding: ${GRID(4)} ${GRID(6.75)};
        max-width: ${({ maxWidth }) => GRID(maxWidth / 8)};
        box-shadow: 0 0 ${GRID(1.25)} ${GRID(0.125)} ${transparentize(COLORS_NEXT.BLACK, "0.05")};
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
    width: ${GRID(10)};
    height: ${GRID(10)};
    margin: 0 0 ${GRID(4)};
    background-size: 90%;
    background-image: url(${({ image }) => image});
    background-repeat: no-repeat;
    background-position: center;

    @media only screen and (min-width: 1024px) {
        width: ${GRID(31.25)};
        margin: 0;
        height: ${GRID(26.25)};
    }
`

const AreaTitle = styled.div`
    color: ${COLORS_NEXT.BRAND.NAVY_900};
    margin: 0 0 ${GRID(1)};
    font-size: ${GRID(2.75)};
    line-height: ${GRID(4.125)};
    font-weight: 700;

    @media only screen and (min-width: 1024px) {
        font-size: ${GRID(3.75)};
        line-height: ${GRID(5.625)};
        margin: 0 0 ${GRID(2)};
    }
`

export default Areas;