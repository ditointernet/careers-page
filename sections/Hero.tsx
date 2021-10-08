import type { NextPage } from "next";
import styled from "styled-components";
import { COLORS, GRID } from "@ditointernet/uai-foundation";

const Container = styled.div`
  align-items: flex-start;
  background-image: url("/images/AboutPageBackgroundImage.png");
  background-position: left top;
  background-repeat: no-repeat;
  display: flex;
  flex-flow: column wrap;
  padding: 0px 3.2vw;
  position: relative;
  width: 100vw;
`;

const Logo = styled.img`
  height: ${GRID(6.25)};
  margin-top: ${GRID(8)};
  width: ${GRID(15)};
  @media (max-width: 500px) {
    height: ${GRID(4)};
    margin-top: ${GRID(5)};
    width: ${GRID(9.5)};
  }
`;

const Subtitle = styled.h2`
  color: #223154;
  font-family: Poppins;
  font-size: ${GRID(3.75)};
  font-style: normal;
  font-weight: 600;
  line-height: ${GRID(5.625)};
  margin: 85px 0px 8px;
  width: ${GRID(50)};
  @media (max-width: 500px) {
    font-size: ${GRID(2)};
    line-height: ${GRID(3)};
    margin: 40px 0px 8px;
    width: ${GRID(25)};
  }
`;

const Title = styled.h1`
  color: #223154;
  font-family: "Poppins";
  font-size: ${GRID(4.5)};
  font-style: normal;
  font-weight: 700;
  line-height: ${GRID(6.75)};
  margin-bottom: ${GRID(5)};
  @media (max-width: 500px) {
    font-size: ${GRID(2.75)};
    height: ${GRID(4.125)};
    line-height: ${GRID(4.125)};
    margin-bottom: ${GRID(4.625)};
    width: ${GRID(25.875)};
  }
`;

const LinkWrap = styled.div`
  background: #00bd6a;
  border-radius: ${GRID(7)};
  display: flex;
  height: ${GRID(6)};
  justify-content: center;
  padding: 12px 24px;
  width: ${GRID(23.875)};
  ::hover {
    background: ${COLORS.GREEN_DARK};
  }
`;

const Link = styled.a`
  color: ${COLORS.WHITE};
  font-family: Poppins;
  font-size: ${GRID(2)};
  font-style: normal;
  font-weight: 500;
  line-height: ${GRID(3)};
  text-align: center;
`;

const Frame = styled.img`
  max-width: 80vw;
  position: absolute;
  right: ${GRID(1.25)};
  top: 32vh;
  @media (max-width: 800px) {
    position: static;
    margin-right: ${GRID(1.625)};
  }
`;

const FrameWrap = styled.div`
  width: 100vw;
  height: ${GRID(50)};
  @media (max-width: 800px) {
    margin-top: ${GRID(6.25)};
    display: flex;
    justify-content: flex-end;
    height: fit-content;
  }
`;

const Footer = styled.footer`
  align-items: center;
  display: flex;
  flex-flow: column wrap;
  height: fit-content;
  padding-bottom: ${GRID(1.625)};
  width: 100%;
  @media (max-width: 500px) {
    display: none;
  }
`;

const Info = styled.p`
  color: #8d95a7;
  font-family: Poppins;
  font-size: ${GRID(2)};
  font-style: normal;
  font-weight: 600;
  line-height: ${GRID(3)};
  margin: 4px 0px 0px;
`;

const Hero: NextPage = () => (
  <Container>
    <Logo src="/images/Logo.png" alt="Dito logomark" />
    <Subtitle>
      Nossa paixão por tecnologia está revolucionando o varejo.
    </Subtitle>
    <Title>Vem com a gente!</Title>
    <LinkWrap>
      <Link href="" target="_blank">
        Ver nossas vagas
      </Link>
    </LinkWrap>
    <FrameWrap>
      <Frame
        src="/images/Frame.png"
        alt="Picture of people looking for a computer"
      />
    </FrameWrap>

    <Footer>
      <img src="/images/chevron-down.png" alt="" />
      <Info>Deslize a página para descobrir mais sobre a Dito</Info>
    </Footer>
  </Container>
);

export default Hero;
