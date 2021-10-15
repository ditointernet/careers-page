import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards"

import SwiperCore, {
    EffectCards
} from 'swiper';



const Testimonials = () => {
    SwiperCore.use([EffectCards]);

    return (
        <Section>
            <h2>Testimonials HAHAHAHA</h2>
            <Swiper
                style={{
                    width: "317px",
                    height: "320px",
                }}
                effect='cards'
                grabCursor={true}
            >
                <SwiperSlide
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "18px",
                        fontSize: "22px",
                        fontWeight: "bold",
                        color: "#fff",
                        backgroundColor: "green",
                    }}
                >
                    Slide 1
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "18px",
                        fontSize: "22px",
                        fontWeight: "bold",
                        color: "#fff",
                        backgroundColor: "green",
                    }}
                >
                    Slide 2
                </SwiperSlide>
            </Swiper >
        </Section >
    )
}

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 851px;
`;

export default Testimonials