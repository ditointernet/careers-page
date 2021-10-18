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
            <ImgContainer style={{ backgroundImage: `url(${slide.url})` }} />
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
`;

const Title = styled.h2`
    color: ${COLORS.NAVY_DARK};
    margin: 55px 0;
    font-size: 22px;
    line-height: 33px;
    font-weight: 700;

    @media only screen and (min-width: 1024px) {
        font-size: 36px;
        line-height: 54px;
    }
`;

const SwiperMobile = styled(Swiper)`
    width: 317px;
    height: 441px;

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
            box-shadow: 0px 0px 85px rgba(0, 0, 0, 0.1);
            border-radius: 16px;
        }
    }
`

const SwiperDesktop = styled(Swiper)`
    width: calc(100% - 30px);
    display: none;
    padding: 0px 50px 40px;
    max-width: 1033px;

    @media only screen and (min-width: 1024px) {
        display: block;
    }

    .swiper-wrapper {
        width: 100%;
        height: 417px;
        
        > .swiper-slide {
            display: flex;
            border-radius: 24px;
            background-color: ${COLORS.WHITE};
            
            &.swiper-slide-active {
                box-shadow: 0px 0px 85px rgba(0, 0, 0, 0.1);
            }
        }
    }

    .swiper-button-prev {
        left: 0;
        color: ${COLORS.GREEN_MAIN};
    }

    .swiper-button-next {
        right: 0;
        color: ${COLORS.GREEN_MAIN};
    }

    .swiper-pagination {
        bottom: 0;

        .swiper-pagination-bullet-active {
            background: ${COLORS.GREEN_MAIN};
        }
    }
`

const ImgContainer = styled.div`
    width: 100%;
    height: 136px;
    background-size: cover;

    @media only screen and (min-width: 1024px) {
        width: 378px;
        height: 100%;
    }
`

const Wrapper = styled.div`
    width: 100%;
    height: calc(100% - 136px);
    padding: 24px 20px;

    @media only screen and (min-width: 1024px) {
        width: calc(100% - 378px);
        height: 100%;
        padding: 56px 48px;
    }
`

const Name = styled.p`
    margin: 0;
    color: ${COLORS.NAVY_DARK};
    font-size: 22px;
    font-weight: 700;
    line-height: 33px;
    margin-bottom: 16px;

    @media only screen and (min-width: 1024px) {
        font-size: 30px;
        line-height: 45px;
        margin-bottom: 12px;
    }
`

const DescriptionDefault = styled.p`
    margin: 0;
    color: ${COLORS.GRAY_4};
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
`

const Profession = styled(DescriptionDefault)`
    margin-bottom: 12px;

    @media only screen and (min-width: 1024px) {
        margin-bottom: 4px;
    }
`

const Local = styled(DescriptionDefault)`
    margin-bottom: 24px;

    @media only screen and (min-width: 1024px) {
        margin-bottom: 36px;
    }
`

const Testimonial = styled(DescriptionDefault)`
    max-width: 330px;
    margin-bottom: 16px;

    @media only screen and (min-width: 1024px) {
        margin-bottom: 48px;
    }
`

export default Testimonials