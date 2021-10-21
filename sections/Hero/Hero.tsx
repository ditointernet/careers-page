import type { NextPage } from "next";
import styled from "styled-components";
import { COLORS, GRID } from "@ditointernet/uai-foundation";
import ButtonPrimary from "@/components/ButtonPrimary";

const Hero: NextPage = () => (
  <Container>
    <Logo
      alt="Nossa paixão por tecnologia está revolucionando o varejo."
      src="/images/logo-dito.png"
    />
    <Title>Nossa paixão por tecnologia está revolucionando o varejo.</Title>
    <Subtitle>Vem com a gente!</Subtitle>
    <ButtonPrimary
      style={{ marginTop: GRID(5), width: GRID(23.875) }}
      href="#vagas"
    >
      Ver nossas vagas
    </ButtonPrimary>
    <FrameWrap>
      <Frame
        alt="Foto de pessoas trabalhando juntas em frente a um computador"
        src="/images/frame.png"
      />
    </FrameWrap>
    <Footer>
      <img src="/images/chevron-down.png" alt="" />
      <Info>Deslize a página para descobrir mais sobre a Dito</Info>
    </Footer>
  </Container>
);

const Container = styled.section`
  background-image: url("/images/about-page-background-image.png");
  background-position: left top;
  background-repeat: no-repeat;
  display: flex;
  flex-flow: column wrap;
  margin-top: ${GRID(16)};
  padding: 0px 0px 0px ${GRID(10.5)};
  width: 100vw;

  @media (max-width: 768px) {
    margin-top: ${GRID(13)};
    padding: 0px 0px 0px ${GRID(2.5)};
  }
`;

const Logo = styled.img`
  height: ${GRID(6.25)};
  width: ${GRID(15)};
  @media (max-width: 768px) {
    height: ${GRID(4)};
    width: ${GRID(9.5)};
  }
`;

const Title = styled.h1`
  color: ${COLORS.NAVY_DARK};
  font-size: ${GRID(3.75)};
  font-weight: 600;
  line-height: ${GRID(5.625)};
  margin: ${GRID(10.625)} 0px 0px;
  width: ${GRID(58)};
  @media (max-width: 768px) {
    font-size: ${GRID(2)};
    line-height: ${GRID(3)};
    margin-top: ${GRID(5)};
    width: ${GRID(33)};
  }
`;

const Subtitle = styled.h2`
  color: ${COLORS.NAVY_DARK};
  font-size: ${GRID(4.5)};
  line-height: ${GRID(6.75)};
  margin: ${GRID(1)} 0px 0px;
  width: ${GRID(42.375)};
  @media (max-width: 768px) {
    font-size: ${GRID(2.75)};
    line-height: ${GRID(4.125)};
    width: ${GRID(25.875)};
  }
`;

const Frame = styled.img`
  bottom: ${GRID(16.75)};
  max-width: 65.208vw;
  position: absolute;
  right: ${GRID(3.75)};
  @media (max-width: 768px) {
    bottom: 0px;
    right: ${GRID(1.625)};
  }
  @media (max-width: 425px) {
    max-height: ${GRID(20.5)};
    max-width: 82.666vw;
  }
`;

const FrameWrap = styled.div`
  height: ${GRID(61.875)};
  position: relative;
  width: 100%;
  @media (max-width: 768px) {
    height: ${GRID(26.75)};
  }
`;

const Footer = styled.footer`
  align-items: center;
  display: flex;
  flex-flow: column wrap;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Info = styled.p`
  color: ${COLORS.GRAY_4};
  font-size: ${GRID(2)};
  font-weight: 600;
  line-height: ${GRID(3)};
  margin: ${GRID(0.5)} 0px 0px;
`;

export default Hero;
