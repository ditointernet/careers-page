import styled from "styled-components";
import { COLORS_NEXT, GRID } from "@ditointernet/uai-foundation";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const BrandLogo = styled.div`
  width: ${GRID(8)};
  height: ${GRID(8)};
  display: inline-block;
  background-color: ${COLORS_NEXT.BRAND.GREEN_600};
`;

const Row = styled.div`
  display: flex;

  ${BrandLogo} ~ ${BrandLogo} {
    margin-left: ${GRID(13)};
  }
`;

const BrandsRow = () => (
  <Row>
    <BrandLogo />
    <BrandLogo />
    <BrandLogo />
    <BrandLogo />
    <BrandLogo />
    <BrandLogo />
    <BrandLogo />
    <BrandLogo />
    <BrandLogo />
  </Row>
);

const BrandsContainer = styled.div`
  white-space: nowrap;
  display: flex;
  flex-flow: column;
  align-items: center;

  ${Row}:last-of-type {
    margin-bottom: ${GRID(8)};
  }
`;

const Brands = () => (
  <BrandsContainer>
    <h2>Brands</h2>
    <ParallaxProvider>
      <Parallax x={[-100, 0]}>
        <BrandsRow />
      </Parallax>
      <Parallax x={[75, 0]}>
        <BrandsRow />
      </Parallax>
    </ParallaxProvider>
  </BrandsContainer>
);

export default Brands;
