import { useCallback } from "react";

import styled from "styled-components";
import { GRID } from "@ditointernet/uai-foundation";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const arrayBrands = [
  <img src="/images/acer.jpg" alt="Acer" />,
  <img src="/images/lego.jpg" alt="Lego" />,
  <img src="/images/animale.jpg" alt="Animale" />,
  <img src="/images/cea.jpg" alt="C&A" />,
  <img src="/images/polishop.jpg" alt="Polishop" />,
  <img src="/images/tef.jpg" alt="Track & Field" />,
  <img src="/images/ingresso.jpg" alt="Ingresso.com" />,
  <img src="/images/chillibeans.jpg" alt="Chilli Beans" />,
  <img src="/images/imaginarium.jpg" alt="Imaginarium" />,
  <img src="/images/farm.jpg" alt="Farm" />,
];

const Brands = () => {
  let isMobile = useCallback(() => {
    return Boolean(
      window?.navigator.userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );
  }, []);

  return (
    <BrandsContainer>
      {isMobile() ? (
        <Row>{arrayBrands}</Row>
      ) : (
        <ParallaxProvider>
          <Parallax x={[-60, 0]}>
            <Row>{arrayBrands.slice(0, 5)}</Row>
          </Parallax>
          <Parallax x={[60, 0]} disabled={isMobile()}>
            <Row>{arrayBrands.slice(5, 10)}</Row>
          </Parallax>
        </ParallaxProvider>
      )}
    </BrandsContainer>
  );
};

const Row = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: ${GRID(3)};

    img {
      flex: 1;
      max-width: ${GRID(7.5)};
    }
  }

  img {
    height: auto;
  }

  @media (min-width: 768px) {
    img ~ img {
      margin-left: ${GRID(13)};
    }
  }
`;

const BrandsContainer = styled.div`
  white-space: nowrap;
  display: flex;
  flex-flow: column;
  align-items: center;

  ${Row}:last-of-type {
    margin-bottom: ${GRID(8)};
  }
`;

export default Brands;
