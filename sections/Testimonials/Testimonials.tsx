import { useState } from "react";
import styled from "styled-components";
import ButtonSecondary from "@/components/ButtonSecondary";
import { COLORS_NEXT, GRID, RADII } from "@ditointernet/uai-foundation";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, EffectCards } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cards";

enum Area {
    TECNOLOGIA = "tecnologia",
    COMERCIAL = "comercial",
    GENTEEGESTAO = "gente & gestão",
}

type Slide = {
    image: string,
    video: string,
    name: string,
    profession: string,
    testimonial: string,
    area: Area,
    link: string,
}


const Testimonials = () => {
    SwiperCore.use([Pagination, Navigation, EffectCards]);

    const [modalOpen, setModalOpen] = useState(false);
    const [videoId, setVideoId] = useState("");

    const slideItens: Slide[] = [
        {
            area: Area.COMERCIAL,
            name: "Isabella Moema",
            image: "./images/feras/isabella-moema.jpg",
            video: "1fwMlklPf-M",
            profession: "Especialista de sucesso do cliente",
            testimonial: "\"Eu vim de outras startups onde essa questão da cultura é bem enraizada, mas eu nunca vivi, de fato, uma cultura igual a gente vive aqui na Dito, no dia a dia.\"",
            link: "https://dito.hire.trakstar.com/?team_id=5436&q=&limit=25#content",
        },
        {
            area: Area.COMERCIAL,
            name: "Luis Sena",
            image: "./images/feras/luis-sena.jpg",
            video: "fr_alJWh13Y",
            profession: "Consultor de negócios",
            testimonial: "\"Eu indicaria a Dito para qualquer pessoa que, de fato, queira entregar algo relevante para o mercado. Se a pessoa está disposta a estudar, a fazer boas entregas, a Dito é o melhor lugar.\"",
            link: "https://dito.hire.trakstar.com/?team_id=5436&q=&limit=25#content",
        },
        {
            area: Area.TECNOLOGIA,
            name: "Luciana Batista",
            image: "./images/feras/luciana-batista.jpg",
            video: "ywcOYY85gSw",
            profession: "Product manager",
            testimonial: "\"O ambiente aqui é muito saudável. A rotina aqui é muito fluida, a gente consegue se comunicar com qualquer pessoa.\"",
            link: "https://dito.hire.trakstar.com/?team_id=8496&team_id=5567&q=&limit=25#content",
        },
        {
            area: Area.TECNOLOGIA,
            name: "Victória Vilas Boas",
            image: "./images/feras/victoria-vilas-boas.jpg",
            video: "Va6ueXpxNb0",
            profession: "Desenvolvedora",
            testimonial: "\"A Dito tem muita gente que está aqui há anos e é muito difícil você encontrar isso em outras empresas de tecnologia. Isso que encontrei aqui: muita gente muito boa e que não deixa a Dito de jeito nenhum.\"",
            link: "https://dito.hire.trakstar.com/?team_id=8496&team_id=5567&q=&limit=25#content",
        },
        {
            area: Area.GENTEEGESTAO,
            name: "Luiza Rezende",
            image: "./images/feras/luiza-rezende.jpg",
            video: "akN-n6ZPe-g",
            profession: "Analista de gestão de pessoas",
            testimonial: "\"O trabalho remoto trouxe pra gente pessoas dos mais diversos panoramas, experiências profissionais. E isso é muito rico, isso traz ideias mais interessantes, mais completas, com muito mais potencial.\"",
            link: "https://dito.hire.trakstar.com/?team_id=26339&team_id=27867&q=&limit=25#content",
        },
        {
            area: Area.TECNOLOGIA,
            name: "Pedro Rezende",
            image: "./images/feras/pedro-rezende.jpg",
            video: "3AlSFC-mPWU",
            profession: "Desenvolvedor",
            testimonial: "\"Aprendi muita coisa com pessoas que não têm nada a ver com a área. Não importa a área, todas elas se comunicam muito bem e ensinam coisas umas para as outras.\"",
            link: "https://dito.hire.trakstar.com/?team_id=8496&team_id=5567&q=&limit=25#content",
        },
    ];

    const SwiperItens = slideItens.map((slide: Slide, index: number) => (
        <SwiperSlide key={index}>
            <MidiaContainer
                image={slide.image}
                onClick={() => {
                    setModalOpen(!modalOpen);
                    setVideoId(slide.video);
                }}
            />
            <Wrapper>
                <div>
                    <Name>{slide.name}</Name>
                    <Description>{slide.profession}</Description>
                    <Description>{slide.testimonial}</Description>
                </div>
                <div>
                    <ButtonVideo
                        onClick={() => {
                            setModalOpen(!modalOpen);
                            setVideoId(slide.video);
                        }}
                    >
                        Assista o vídeo
                    </ButtonVideo>
                    <ButtonSecondary target="_black" href={slide.link}>Ver vagas de {slide.area}</ButtonSecondary>
                </div>
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
                    setVideoId("");
                }}
            >
                <iframe
                    src={"https://www.youtube.com/embed/" + videoId + "?autoplay=1&rel=0"}
                    title="Depoimentos dos FERAs"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </ModalEmbed>
        </Section >
    )
}

const Section = styled.section`
    margin: ${GRID(1)} 0;

    @media only screen and (min-width: 1200px) {
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
  
    @media only screen and (min-width: 1200px) {
        padding: ${GRID(10)} ${GRID(9)};
    }
`

const Title = styled.h2`
    color: ${COLORS_NEXT.BRAND.NAVY_900};
    margin: 0 0 ${GRID(7)};
    font-size: ${GRID(2.75)};
    line-height: ${GRID(4.125)};
    font-weight: 700;

    @media only screen and (min-width: 1200px) {
        margin: 0;
        font-size: ${GRID(4.5)};
        line-height: ${GRID(6.75)};
    }
`;

const SwiperMobile = styled(Swiper)`
    width: ${GRID(39.625)};
    height: ${GRID(66.875)};

    @media only screen and (min-width: 1200px) {
        display: none;
    }

    .swiper-wrapper {
        > div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: column;
            background-color: ${COLORS_NEXT.WHITE};
            box-shadow: 0 0 ${GRID(10.625)} rgba(0, 0, 0, 0.1);
            border-radius: ${GRID(2)};
        }
    }
`

const SwiperDesktop = styled(Swiper)`
    width: 100%;
    display: none;
    padding: ${GRID(7.5)};
    max-width: ${GRID(131.625)};

    @media only screen and (min-width: 1200px) {
        display: block;
    }

    .swiper-wrapper {
        width: 100%;
        height: ${GRID(52.125)};
        
        > .swiper-slide {
            display: flex;
            border-radius: ${GRID(3)};
            background-color: ${COLORS_NEXT.WHITE};
            
            &.swiper-slide-active {
                box-shadow: 0px 0px ${GRID(6)} rgba(0, 0, 0, 0.1);
            }
        }
    }

    .swiper-button-prev {
        left: 0;
        width: 36px;
        height: 36px;
        border-radius: ${RADII.PILL};
        border: 1px solid #D7DAE0;
        
        &::after {
            content: '';
            height: 24px;
            width: 24px;
            background-image: url('./icons/chevron-left-green.svg');
        }
        
        &:hover {
            background-color: ${COLORS_NEXT.BRAND.GREEN_100};
        }
    }

    .swiper-button-next {
        right: 0;
        width: 36px;
        height: 36px;
        border-radius: ${RADII.PILL};
        border: 1px solid #D7DAE0;
        
        &::after {
            content: '';
            height: 24px;
            width: 24px;
            background-image: url('./icons/chevron-right-green.svg');
        }
        
        &:hover {
            background-color: ${COLORS_NEXT.BRAND.GREEN_100};
        }
    }

    .swiper-pagination {
        bottom: 0;

        .swiper-pagination-bullet-active {
            background: ${COLORS_NEXT.BRAND.GREEN_600};
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
    background-position-y: -${GRID(2.5)};

    @media only screen and (min-width: 1200px) {
        width: ${GRID(47.25)};
        height: 100%;
        background-position-y: 0;
        border-top-left-radius: ${GRID(3)};
        border-bottom-left-radius: ${GRID(3)};
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

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media only screen and (min-width: 1200px) {
        width: calc(100% - ${GRID(47.25)});
        height: 100%;
        padding: ${GRID(7)};
    }
`

const Name = styled.p`
    margin: 0;
    color: ${COLORS_NEXT.BRAND.NAVY_900};
    font-size: ${GRID(2.75)};
    font-weight: 700;
    line-height: ${GRID(4.125)};

    @media only screen and (min-width: 1200px) {
        font-size: ${GRID(3.75)};
        line-height: ${GRID(5.625)};
    }
`

const Description = styled.p`
    margin: 0;
    color: ${COLORS_NEXT.NEUTRAL_400};
    font-size: ${GRID(2)};
    font-weight: 500;
    line-height: ${GRID(3)};
    margin-bottom: ${GRID(1.5)};

    @media only screen and (min-width: 1200px) {
        margin-bottom: ${GRID(3)};
    }
`

const ButtonVideo = styled.div`
    gap: ${GRID(1.25)};
    width: ${GRID(18.125)};
    color: ${COLORS_NEXT.BRAND.GREEN_600};
    cursor: pointer;
    display: flex;
    padding: ${GRID(1)} ${GRID(1.25)};
    font-size: ${GRID(1.5)};
    font-weight: 500;
    align-items: center;
    line-height: ${GRID(2.25)};
    margin-bottom: ${GRID(2)};
    justify-content: center;

    &::before {
        width: ${GRID(3)};
        height: ${GRID(3)};
        content: '';
        display: inline-block;
        background-size: cover;
        background-image: url("./icons/video.svg");
        background-repeat: no-repeat;
    }

    &:hover {
        background-color: ${COLORS_NEXT.BRAND.GREEN_100};
        border-radius: ${RADII.DEFAULT};
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
    background: rgb(0 0 0 / 70%);
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
            height: ${GRID(49.125)};
        }

        @media only screen and (min-width: 1200px) {
            width: ${GRID(125)};
            height: ${GRID(70.25)};
        }
    }
`

export default Testimonials