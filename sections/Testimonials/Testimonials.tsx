import React from 'react'
import styled from 'styled-components'
import ButtonSecondary from "@/components/ButtonSecondary";
import { COLORS, GRID } from "@ditointernet/uai-foundation";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, EffectCards } from 'swiper';

import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-cards"

type Slide = {
    url: string,
    name: string,
    profession: string,
    local: string,
    testimonial: string,
}


const Testimonials = () => {
    SwiperCore.use([Pagination, Navigation, EffectCards]);

    const slideItens: Slide[] = [
        {
            url: "./images/temp_testimonials.png",
            name: "Nome",
            profession: "Desenvolvedor Frontend",
            local: "Belo Horizonte, MG",
            testimonial: '"Eu sou sempre muito incentivada aqui dentro a ser a pessoa que eu sou, uma cientista de dados..."',
        },
        {
            url: "./images/temp_testimonials.png",
            name: "Nome",
            profession: "Desenvolvedor Frontend",
            local: "Belo Horizonte, MG",
            testimonial: '"Eu sou sempre muito incentivada aqui dentro a ser a pessoa que eu sou, uma cientista de dados..."',
        },
        {
            url: "./images/temp_testimonials.png",
            name: "Nome",
            profession: "Desenvolvedor Frontend",
            local: "Belo Horizonte, MG",
            testimonial: '"Eu sou sempre muito incentivada aqui dentro a ser a pessoa que eu sou, uma cientista de dados..."',
        },
    ];

    const SwiperItens = slideItens.map((slide: Slide, index: number) => (
        <SwiperSlide key={index}>
            <ImgContainer image={slide.url} />
            <Wrapper>
                <Name>{slide.name}</Name>
                <Profession>{slide.profession}</Profession>
                <Local>{slide.local}</Local>
                <Testimonial>{slide.testimonial}</Testimonial>
                <ButtonSecondary>Ver vagas de tecnologia</ButtonSecondary>
            </Wrapper>
        </SwiperSlide>
    ))

    return (
        <Section>
            <Title>A Dito por FERAS</Title>
            <SwiperMobile
                effect='cards'
                grabCursor={true}
            >
                {SwiperItens}
            </SwiperMobile>
            <SwiperDesktop
                loop={true}
                navigation={true}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{
                    "clickable": true
                }}
            >
                {SwiperItens}
            </SwiperDesktop>
        </Section >
    )
}

const Section = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: ${GRID(7)} 0 ${GRID(12.75)};

    @media only screen and (min-width: 1024px) {
        margin: ${GRID(15)} 0 ${GRID(21.75)};
    }
`;

const Title = styled.h2`
    color: ${COLORS.NAVY_DARK};
    margin: 0 0 ${GRID(7)};
    font-size: ${GRID(2.75)};
    line-height: ${GRID(4.125)};
    font-weight: 700;

    @media only screen and (min-width: 1024px) {
        font-size: ${GRID(4.5)};
        line-height: ${GRID(6.75)};
    }
`;

const SwiperMobile = styled(Swiper)`
    width: ${GRID(39.625)};
    height: ${GRID(55.125)};

    @media only screen and (min-width: 1024px) {
        display: none;
    }

    .swiper-wrapper {
        > div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: column;
            background-color: ${COLORS.WHITE};
            box-shadow: 0px 0px ${GRID(10.625)} rgba(0, 0, 0, 0.1);
            border-radius: ${GRID(2)};
        }
    }
`

const SwiperDesktop = styled(Swiper)`
    width: calc(100% - ${GRID(3.75)});
    display: none;
    padding: 0px ${GRID(6.25)} ${GRID(5)};
    max-width: ${GRID(129.125)};

    @media only screen and (min-width: 1024px) {
        display: block;
    }

    .swiper-wrapper {
        width: 100%;
        height: ${GRID(52.125)};
        
        > .swiper-slide {
            display: flex;
            border-radius: ${GRID(3)};
            background-color: ${COLORS.WHITE};
            
            &.swiper-slide-active {
                box-shadow: 0px 0px ${GRID(10.625)} rgba(0, 0, 0, 0.1);
            }
        }
    }

    .swiper-button-prev {
        left: 0;
        width: ${GRID(4)};
        height: ${GRID(4.125)};

        &::after {
            content: url('./icons/arrow-left.svg');
            line-height: ${GRID(4)};
        }
    }

    .swiper-button-next {
        right: 0;
        width: ${GRID(4)};
        height: ${GRID(4.125)};

        &::after {
            content: url('./icons/arrow-right.svg');
            line-height: ${GRID(4)};
        }
    }

    .swiper-pagination {
        bottom: 0;

        .swiper-pagination-bullet-active {
            background: ${COLORS.GREEN_MAIN};
        }
    }
`

const ImgContainer = styled.div<{ image: string }>`
    width: 100%;
    height: ${GRID(17)};
    background-size: cover;
    background-image: url(${props => props.image});

    @media only screen and (min-width: 1024px) {
        width: ${GRID(47.25)};
        height: 100%;
    }
`

const Wrapper = styled.div`
    width: 100%;
    height: calc(100% - ${GRID(17)});
    padding: ${GRID(3)} ${GRID(2.5)};

    @media only screen and (min-width: 1024px) {
        width: calc(100% - ${GRID(47.25)});
        height: 100%;
        padding: ${GRID(7)} ${GRID(6)};
    }
`

const Name = styled.p`
    margin: 0;
    color: ${COLORS.NAVY_DARK};
    font-size: ${GRID(2.75)};
    font-weight: 700;
    line-height: ${GRID(4.125)};
    margin-bottom: ${GRID(2)};

    @media only screen and (min-width: 1024px) {
        font-size: ${GRID(3.75)};
        line-height: ${GRID(5.625)};
        margin-bottom: ${GRID(1.5)};
    }
`

const DescriptionDefault = styled.p`
    margin: 0;
    color: ${COLORS.GRAY_4};
    font-size: ${GRID(2)};
    font-weight: 500;
    line-height: ${GRID(3)};
`

const Profession = styled(DescriptionDefault)`
    margin-bottom: ${GRID(1.5)};

    @media only screen and (min-width: 1024px) {
        margin-bottom: ${GRID(0.5)};
    }
`

const Local = styled(DescriptionDefault)`
    margin-bottom: ${GRID(3)};

    @media only screen and (min-width: 1024px) {
        margin-bottom: ${GRID(4.5)};
    }
`

const Testimonial = styled(DescriptionDefault)`
    max-width: ${GRID(41.25)};
    margin-bottom: ${GRID(2)};

    @media only screen and (min-width: 1024px) {
        margin-bottom: ${GRID(6)};
    }
`

export default Testimonials