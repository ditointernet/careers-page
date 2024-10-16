import styled from "styled-components";
import CardsList from "@/components/CardsList";
import { COLORS_NEXT, GRID } from "@ditointernet/uai-foundation";

type Card = {
  img: string;
  title: string;
  description: string;
};

const Benefits = () => {
  const cards: Card[] = [
    {
      img: "./icons/plano-de-saude.svg",
      title: "Plano de saúde",
      description:
        "Plano de saúde e odontológico Amil de cobertura nacional e sem coparticipação para FERAs e dependentes.",
    },
    {
      img: "./icons/cartao-caju.svg",
      title: "Cartão Caju",
      description:
        "Crédito no valor de R$44,00/dia em cartão com bandeira Visa™ para você usar como e onde quiser, inclusive como refeição e alimentação.",
    },
    {
      img: "./icons/licenca-maternidade.svg",
      title: "Licenças estendidas",
      description:
        "São 180 dias para mamães e 20 dias para papais, que valem também para casos de adoção e guarda judicial. Durante esse período, os créditos do Caju são mantidos.",
    },
    {
      img: "./icons/wellhub.svg",
      title: "Wellhub",
      description:
        "Wellhub com planos variados, incluindo um gratuito, para manter a saúde física e mental em dia. O importante é cuidar do seu bem-estar.",
    },
    {
      img: "./icons/incentivos-ao-aprendizado.svg",
      title: "Incentivos ao aprendizado",
      description:
        "Participação em cursos, eventos, talks e meetups, compra de livros, biblioteca interna, entre outros.",
    },
    {
      img: "./icons/auxilio-ho.svg",
      title: "Auxílio escritório",
      description:
        "Crédito no valor de R$ 100,00/mês, direto no cartão Caju, para ajudar a custear parte dos gastos gerados pelo trabalho remoto.",
    },
  ];

  return (
    <Section id="beneficios">
      <SectionWrapper>
        <Title>Nossos benefícios</Title>
        <CardsList cards={cards} minMobileHeight={370} />
      </SectionWrapper>
    </Section>
  );
};

const Section = styled.section`
  margin: ${GRID(1)} 0;

  @media only screen and (min-width: 1024px) {
    margin: ${GRID(2)} 0;
  }
`;

const SectionWrapper = styled.div`
  margin: 0 auto;
  padding: ${GRID(8)} ${GRID(2)};
  max-width: ${GRID(180)};

  @media only screen and (min-width: 1024px) {
    padding: ${GRID(10)} ${GRID(9)};

  }
`;

const Title = styled.h2`
  color: ${COLORS_NEXT.BRAND.NAVY_900};
  margin: 0 0 ${GRID(5)};
  font-size: ${GRID(2.75)};
  font-weight: 700;
  line-height: ${GRID(4.125)};

  @media only screen and (min-width: 1024px) {
    margin: 0 0 ${GRID(14)};
    font-size: ${GRID(4.5)};
    line-height: ${GRID(6.75)};
  }
`;

export default Benefits;
