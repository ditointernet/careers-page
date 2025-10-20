import ButtonPrimary from "@/components/ButtonPrimary";
import { COLORS_NEXT, GRID } from "@ditointernet/uai-foundation";
import type { NextPage } from "next";
import styled from "styled-components";

const pageDown = () => {
  const pageTwo = document.getElementById("sobre-a-dito");
  if (pageTwo) pageTwo.scrollIntoView({
    behavior: "smooth"
  });
}

const Hero: NextPage = () => (
  <Section>
    <SectionWrapper>
      <Content>
        <Logo
          alt="Nossa paixão por tecnologia está revolucionando o varejo."
          src="/images/logo.svg"
        />
        <Title>Nossa paixão por tecnologia está revolucionando o varejo.</Title>
        <Subtitle>Vem com a gente!</Subtitle>
        <ButtonPrimary href="#nossas-vagas">Ver nossas vagas</ButtonPrimary>
      </Content>
      <ImageWrapper src="./images/people.svg" alt="Grupo de pessoas reunidas em torno de uma mesa com um laptop ao centro." />
      <Footer>
        <img src="/images/chevron-down.svg" alt="seta para baixo" onClick={pageDown} />
        <p>Deslize a página para descobrir mais sobre nós</p>
      </Footer>
    </SectionWrapper>
  </Section>
);

const Section = styled.section`
  height: calc(100vh - 64px);
  margin: 0 0 ${GRID(2)} 0;
  position: relative;
  background-size: cover;
  background-image: url("./images/about-page-background-image.png");
  background-repeat: no-repeat;
  background-position: 0;

  @media (min-width: 768px) {
    margin: 0 0 ${GRID(1)} 0;
  }
`;

const SectionWrapper = styled.div`
  width: 100vw;
  margin: ${GRID(8)} auto 0;
  height: calc(100vh - 64px);
  display: flex;
  padding: ${GRID(8)} ${GRID(2.5)};
  position: relative;
  max-width: ${GRID(180)};
  flex-direction: column;
  justify-content: flex-start;

  @media (min-width: 768px) {
    padding: ${GRID(10)} ${GRID(10.5)};
  }
`;

const Content = styled.div`
  z-index: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`

const ImageWrapper = styled.img`
  right: ${GRID(2)};
  width: calc(100% - 32px);
  bottom: ${GRID(2)};
  z-index: 0;
  position: absolute;
  max-width: ${GRID(117.5)};

  @media (min-width: 768px) {
    width: 50%;
    right: ${GRID(10.5)};
    bottom: ${GRID(12.5)};
  }

  @media (min-width: 1024px) {
    width: 60%;
  }
`

const Logo = styled.img`
  width: ${GRID(15)};
  height: ${GRID(6.25)};
  margin: 0 0 ${GRID(5)} 0;

  @media (min-width: 768px) {
    margin: 0 0 ${GRID(10.625)} 0;
  }
`;

const Title = styled.h1`
  color: ${COLORS_NEXT.BRAND.NAVY_900};
  margin: 0 0 ${GRID(1)} 0;
  max-width: ${GRID(33)};
  font-size: ${GRID(2)};
  font-weight: 600;
  line-height: ${GRID(3)};

  @media (min-width: 768px) {
    max-width: ${GRID(58)};
    font-size: ${GRID(3.75)};
    line-height: ${GRID(5.625)};
  }
`;

const Subtitle = styled.h2`
  color: ${COLORS_NEXT.BRAND.NAVY_900};
  margin: 0 0 ${GRID(4.625)} 0;
  font-size: ${GRID(2.75)};
  font-weight: 700;
  line-height: ${GRID(4.125)};

  @media (min-width: 768px) {
    margin: 0 0 ${GRID(5)} 0;
    font-size: ${GRID(4.5)};
    line-height: ${GRID(6.75)};
  }
`;

const Footer = styled.footer`
  display: none;

  @media (min-width: 768px) {
    left: calc(50% - 200px);
    bottom: ${GRID(1.75)};
    display: flex;
    position: absolute;
    flex-flow: column wrap;
    align-items: center;
  }

  img {
    cursor: pointer;
  }

  p {
    color: ${COLORS_NEXT.NEUTRAL_400};
    font-size: ${GRID(2)};
    font-weight: 600;
    line-height: ${GRID(3)};
  }

`;

export default Hero;
