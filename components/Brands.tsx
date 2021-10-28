import Image from "next/image"
import styled from "styled-components";
import { GRID } from "@ditointernet/uai-foundation";
import { useCallback } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const arrayBrands = [
  <Image src="/images/acer.jpg" alt="Acer" key="acter" />,
  <Image src="/images/lego.jpg" alt="Lego" key="lego" />,
  <Image src="/images/animale.jpg" alt="Animale" key="animale" />,
  <Image src="/images/cea.jpg" alt="C&A" key="cea" />,
  <Image src="/images/polishop.jpg" alt="Polishop" key="polishop" />,
  <Image src="/images/tef.jpg" alt="Track & Field" key="trackandfield" />,
  <Image src="/images/ingresso.jpg" alt="Ingresso.com" key="ingresso" />,
  <Image src="/images/chillibeans.jpg" alt="Chilli Beans" key="chillibeans" />,
  <Image src="/images/imaginarium.jpg" alt="Imaginarium" key="imaginaruim" />,
  <Image src="/images/farm.jpg" alt="Farm" key="farm" />,
];

const Brands = () => {
  let isMobile = useCallback(() => {
    return Boolean(
      window?.navigator.userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      ) || window.innerWidth < 768
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
