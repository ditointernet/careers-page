import styled from "styled-components";
import { GRID } from "@ditointernet/uai-foundation";
import { useCallback } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const Brands = () => {
  const arrayBrands = [
    <ImageBox src="/images/acer.jpg" key="acter" />,
    <ImageBox src="/images/lego.jpg" key="lego" />,
    <ImageBox src="/images/animale.jpg" key="animale" />,
    <ImageBox src="/images/cea.jpg" key="cea" />,
    <ImageBox src="/images/polishop.jpg" key="polishop" />,
    <ImageBox src="/images/tef.jpg" key="trackandfield" />,
    <ImageBox src="/images/ingresso.jpg" key="ingresso" />,
    <ImageBox src="/images/chillibeans.jpg" key="chillibeans" />,
    <ImageBox src="/images/imaginarium.jpg" key="imaginaruim" />,
    <ImageBox src="/images/farm.jpg" key="farm" />,
  ];

  let isMobile = useCallback(() => Boolean(
    window?.navigator.userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    ) || window.innerWidth < 768
  ), []);

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
    gap: ${GRID(13)};
  }
`;

const ImageBox = styled.div<{ src: string }>`
  width: ${GRID(18.75)};
  height: ${GRID(11.25)};
  background-image: url(${({ src }) => src});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`

const BrandsContainer = styled.div`
  gap: ${GRID(8)};
  display: flex;
  flex-flow: column;
  align-items: center;
  white-space: nowrap;
`;

export default Brands;
