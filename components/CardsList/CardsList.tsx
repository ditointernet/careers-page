import styled from "styled-components";
import { COLORS_NEXT, GRID } from "@ditointernet/uai-foundation";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import { transparentize } from "utils/colors-utils";

type Card = {
    img?: string,
    title?: string,
    description?: string,
}

type Props = {
    cards: Card[],
    minMobileHeight?: number,
    minDesktopHeight?: number,
}

const CardsList = ({ cards, minMobileHeight, minDesktopHeight }: Props) => {
    SwiperCore.use([Autoplay, Navigation]);

    return (
        <>
            <SwiperMobile
                loop={true}
                autoplay={{
                    delay: 2500,
                }}
                minheight={minMobileHeight || 0}
                navigation={true}
            >
                {cards.map(({ img, title, description }: Card, index: number) => (
                    <SwiperSlide key={index}>
                        {img && <CardImg style={{ backgroundImage: `url(${img})` }} />}
                        {title && <CardTitle>{title}</CardTitle>}
                        {description && <CardDescription>{description}</CardDescription>}
                    </SwiperSlide>
                ))}
            </SwiperMobile>
            <WrapperCards>
                {cards.map(({ img, title, description }: Card, index: number) => (
                    <Card minheight={minDesktopHeight || 0} key={index}>
                        {img && <CardImg style={{ backgroundImage: `url(${img})` }} />}
                        {title && <CardTitle>{title}</CardTitle>}
                        {description && <CardDescription>{description}</CardDescription>}
                    </Card>
                ))}
            </WrapperCards>
        </>
    );
}

const SwiperMobile = styled(Swiper) <{ minheight: number }>`
    width: 100%;
    padding: 0 0 ${GRID(5.5)};
    max-width: ${GRID(42.875)};

    @media only screen and (min-width: 1024px) {
        display: none;
    }

    .swiper-wrapper {
        > div {
            border: ${GRID(0.125)} solid #E9E9E9;
            padding: ${GRID(4)};
            max-width: 100%;
            min-height: ${({ minheight }) => minheight ? GRID(minheight / 8) : 0};
            border-radius: ${GRID(3)};
            background-color: ${COLORS_NEXT.WHITE};
        }
    }

    .swiper-button-prev {
        width: ${GRID(4)};
        height: ${GRID(4.125)};

        top: unset;
        left: unset;
        right: ${GRID(6)};
        bottom: 0;

        &::after {
            content: url("./icons/arrow-left.svg");
            line-height: ${GRID(4)};
        }
    }

    .swiper-button-next {
        width: ${GRID(4)};
        height: ${GRID(4.125)};

        top: unset;
        left: unset;
        right: 0;
        bottom: 0;

        &::after {
            content: url("./icons/arrow-right.svg");
            line-height: ${GRID(4)};
        }
    }
`

const WrapperCards = styled.div`
    display: none;

    &::after {
        content: "";
        flex: auto;
    }
    
    @media only screen and (min-width: 1024px) {
        gap: ${GRID(3)};
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`

const Card = styled.div<{ minheight: number }>`
    border: ${GRID(0.125)} solid #E9E9E9;
    padding: ${GRID(4)};
    max-width: ${GRID(42.875)};
    min-height: ${({ minheight }) => minheight ? GRID(minheight / 8) : 0};
    border-radius: ${GRID(3)};
    background-color: ${COLORS_NEXT.WHITE};

    @media only screen and (min-width: 1024px) {
        max-width: calc(33% - ${GRID(1.75)});

        &:hover {
            box-shadow: 0 ${GRID(0.5)} ${GRID(1)} ${transparentize(COLORS_NEXT.BLACK, "0.08")};
        }
    }
`

const CardImg = styled.div`
    width: ${GRID(12)};
    height: ${GRID(12)};
    margin: 0 0 ${GRID(3)};
    background-size: cover;
`

const CardTitle = styled.h3`
    color: #223154;
    margin: 0 0 ${GRID(2.5)};
    font-size: ${GRID(2.75)};
    font-weight: 700;
    line-height: ${GRID(4.125)};
`

const CardDescription = styled.div`
    color: #8D95A7;
    font-size: ${GRID(2)};
    font-weight: 500;
    line-height: ${GRID(3)};
`

export default CardsList
