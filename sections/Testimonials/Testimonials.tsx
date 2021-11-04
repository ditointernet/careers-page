import React, { useState } from "react"
import styled from "styled-components"
import ButtonSecondary from "@/components/ButtonSecondary";
import { COLORS, GRID } from "@ditointernet/uai-foundation";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, EffectCards } from "swiper";

import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-cards"

type Slide = {
    image: string,
    video: string,
    name: string,
    profession: string,
    local: string,
    testimonial: string,
}


const Testimonials = () => {
    SwiperCore.use([Pagination, Navigation, EffectCards]);

    const [modalOpen, setModalOpen] = useState(false);
    const [iframeVideo, setIframeVideo] = useState("");

    const slideItens: Slide[] = [
        {
            image: "./images/temp_testimonials.png",
            video: "https://player.vimeo.com/video/640017082?h=5190752281",
            name: "Isabella Moema",
            profession: "Especialista de Sucesso do Cliente",
            local: "Belo Horizonte, MG",
            testimonial: "\"Eu sou sempre muito incentivada aqui dentro a ser a pessoa que eu sou, ...\"",
        },
        {
            image: "",
            video: "https://player.vimeo.com/video/640030966?h=27fac8eef8",
            name: "Luis Sena",
            profession: "Consultor de Negócios",
            local: "",
            testimonial: "",
        },
        {
            image: "",
            video: "https://player.vimeo.com/video/640051678?h=c4ffd2f1aa",
            name: "Luciana Batista",
            profession: "Product Manager",
            local: "",
            testimonial: "",
        },
        {
            image: "",
            video: "https://player.vimeo.com/video/640071139?h=0b52cee9cb",
            name: "Victória Villas Boas",
            profession: "Desenvolvedora",
            local: "",
            testimonial: "",
        },
        {
            image: "",
            video: "https://player.vimeo.com/video/640153879?h=69e193e966",
            name: "Luiza Rezende",
            profession: "Analista de Gestão de Pessoas",
            local: "",
            testimonial: "",
        },
        {
            image: "",
            video: "https://player.vimeo.com/video/640173575?h=62716d8b85",
            name: "Pedro Rezende",
            profession: "Desenvolvedor",
            local: "",
            testimonial: "",
        },
    ];

    const SwiperItens = slideItens.map((slide: Slide, index: number) => (
        <SwiperSlide key={index}>
            <MidiaContainer
                image={slide.image}
                onClick={() => {
                    setModalOpen(!modalOpen);
                    setIframeVideo(slide.video);
                }}
            />
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
            <SectionWrapper>
                <Title>Como é trabalhar aqui</Title>
                <SwiperMobile
                    effect='cards'
                    grabCursor={true}
                >
                    {SwiperItens}
                </SwiperMobile>
                <SwiperDesktop
                    loop={true}
                    navigation={true}
                    spaceBetween={60}
                    slidesPerView={1}
                    pagination={{
                        "clickable": true
                    }}
                >
                    {SwiperItens}
                </SwiperDesktop>
            </SectionWrapper>
            <ModalEmbed
                open={modalOpen}
                onClick={() => {
                    setModalOpen(!modalOpen)
                    setIframeVideo("");
                }}
            >
                <iframe title="vimeo-player" src={iframeVideo} frameBorder="0" allowFullScreen></iframe>
            </ModalEmbed>
        </Section >
    )
}

const Section = styled.section`
    // section disabled temporary for waiting approve content
    /* display: none; */
    margin: ${GRID(1)} 0;
  
    @media only screen and (min-width: 1024px) {
        margin: ${GRID(2)} 0;
    }
`

const SectionWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    padding: ${GRID(8)} ${GRID(2)};
    max-width: ${GRID(180)};
    align-items: center;
    flex-direction: column;
    justify-content: center;
  
    @media only screen and (min-width: 1024px) {
        padding: ${GRID(10)} ${GRID(9)};
    }
`

const Title = styled.h2`
    color: ${COLORS.NAVY_DARK};
    margin: 0 0 ${GRID(7)};
    font-size: ${GRID(2.75)};
    line-height: ${GRID(4.125)};
    font-weight: 700;

    @media only screen and (min-width: 1024px) {
        margin: 0;
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
    padding: ${GRID(7.5)};
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
                box-shadow: 0px 0px ${GRID(6)} rgba(0, 0, 0, 0.1);
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

const MidiaContainer = styled.div<{ image: string }>`
    width: 100%;
    cursor: pointer;
    height: ${GRID(17)};
    display: flex;
    align-items: center;
    background-size: cover;
    justify-content: center;
    background-image: url(${props => props.image});

    @media only screen and (min-width: 1024px) {
        width: ${GRID(47.25)};
        height: 100%;
    }

    &::before {
        width: ${GRID(11.625)};
        height: ${GRID(11.625)};
        content: '';
        background-size: cover;
        background-image: url('./icons/play.svg');
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

const ModalEmbed = styled.div<{ open: boolean }>`
    display: ${({ open }) => open ? "flex" : "none"};

    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 3;
    position: fixed;
    background: rgb(0 0 0 / 30%);
    align-items: center;
    justify-content: center;

    &::before {
        width: ${GRID(12.5)};
        height: ${GRID(12.5)};
        z-index: 1;
        content: '';
        position: absolute;
        background-size: cover;
        background-image: url('./icons/loading.gif');
    }

    iframe {
        width: ${GRID(40)};
        height: ${GRID(22.5)};
        z-index: 1;
        
        @media only screen and (min-width: 768px) {
            width: ${GRID(87.5)};
            height: ${GRID(50)};
        }
    }
`

export default Testimonials