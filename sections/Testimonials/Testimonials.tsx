import React from 'react'
import styled from 'styled-components'
import { COLORS, GRID } from "@ditointernet/uai-foundation";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCards } from 'swiper';

import "swiper/css";
import "swiper/css/effect-cards"

type Slide = {
    url: string,
    name: string,
    profession: string,
    local: string,
    testimonial: string,
}


const Testimonials = () => {
    SwiperCore.use([EffectCards]);

    const slideItens = [
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

    const ItensSlide = slideItens.map((slide: Slide, index: number) => (
        <SwiperSlide key={index}>
            <ImgContainer style={{ backgroundImage: `url(${slide.url})` }} />
            <Wrapper>
                <Name>{slide.name}</Name>
                <Profession>{slide.profession}</Profession>
                <Local>{slide.local}</Local>
                <Testimonial>{slide.testimonial}</Testimonial>
            </Wrapper>
        </SwiperSlide>
    ))

    return (
        <Section>
            <Title>A Dito por FERAS</Title>
            <Slide
                effect='cards'
                grabCursor={true}
            >
                {ItensSlide}
            </Slide>
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
`;

const Slide = styled(Swiper)`
    width: 317px;
    height: 441px;

    .swiper-wrapper {
        > div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: column;
            border-radius: 18px;
            font-size: 22px;
            font-weight: bold;
            background-color: ${COLORS.WHITE};
            box-shadow: 0px 0px 85px rgba(0, 0, 0, 0.1);
            border-radius: 16px;
        }
    }
`

const ImgContainer = styled.div`
    width: 100%;
    height: 136px;
    background-size: cover;
`

const Wrapper = styled.div`
    width: 100%;
    height: calc(100% - 136px);
    padding: 24px 20px;
`

const Name = styled.p`
    margin: 0;
    color: ${COLORS.NAVY_DARK};
    font-size: 22px;
    font-weight: 700;
    line-height: 33px;
    margin-bottom: 16px;
`

const DescriptionDefault = styled.p`
    margin: 0;
    color: ${COLORS.GRAY_4};
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    `

const Profession = styled(DescriptionDefault)`
    color: ${COLORS.GRAY_4};
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    margin-bottom: 12px;
    `

const Local = styled(DescriptionDefault)`
    color: ${COLORS.GRAY_4};
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    margin-bottom: 24px;
`

const Testimonial = styled(DescriptionDefault)`
    color: ${COLORS.GRAY_4};
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    margin-bottom: 16px;
`

export default Testimonials