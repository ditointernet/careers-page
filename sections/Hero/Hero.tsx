import type { NextPage } from "next";
import styled from "styled-components";
import { COLORS, GRID } from "@ditointernet/uai-foundation";
import ButtonPrimary from "@/components/ButtonPrimary";

const Hero: NextPage = () => (
  <Section>
    <SectionWrapper>
      <Content>
        <Logo
          alt="Nossa paixão por tecnologia está revolucionando o varejo."
          src="/images/logo-dito.png"
        />
        <Title>Nossa paixão por tecnologia está revolucionando o varejo.</Title>
        <Subtitle>Vem com a gente!</Subtitle>
        <ButtonPrimary href="#nossas-vagas">Ver nossas vagas</ButtonPrimary>
      </Content>
      <ImageWrapper src="./images/people.svg" />
      <Footer>
        <img src="/images/chevron-down.png" alt="" />
        <p>Deslize a página para descobrir mais sobre a Dito</p>
      </Footer>
    </SectionWrapper>
  </Section>
);

const Section = styled.section`
  margin: 0 0 ${GRID(2)} 0;
  position: relative;
  background-size: cover;
  background-image: url("/images/about-page-background-image.png");
  background-repeat: no-repeat;
  background-position: 0;

  @media (min-width: 768px) {
    margin: 0 0 ${GRID(1)} 0;
  }
`;

const SectionWrapper = styled.div`
  width: 100vw;
  margin: 64px auto 0;
  display: flex;
  padding: ${GRID(8)} ${GRID(2.5)};
  max-width: 1440px;
  min-height: calc(100vh - 64px);
  flex-direction: column;
  justify-content: space-between;
  
  @media (min-width: 768px) {
    padding: ${GRID(10)} ${GRID(10.5)};
    justify-content: center;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`

const ImageWrapper = styled.img`
  width: 90%;
  max-width: 940px;
  align-self: flex-end;
  
  @media (min-width: 768px) {
    margin-top: -40px;
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
  color: ${COLORS.NAVY_DARK};
  margin: 0 0 ${GRID(1)} 0;
  max-width: 264px;
  font-size: ${GRID(2)};
  font-weight: 600;
  line-height: ${GRID(3)};

  @media (min-width: 768px) {
    max-width: 464px;
    font-size: ${GRID(3.75)};
    line-height: ${GRID(5.625)};
  }
`;

const Subtitle = styled.h2`
  color: ${COLORS.NAVY_DARK};
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
    bottom: 14px;
    display: flex;
    position: absolute;
    flex-flow: column wrap;
    align-items: center;
  }
  
  p {
    color: ${COLORS.GRAY_4};
    font-size: ${GRID(2)};
    font-weight: 600;
    line-height: ${GRID(3)};
  }
`;

export default Hero;
