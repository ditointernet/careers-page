import React, { useState, useEffect } from "react"
import styled from 'styled-components'

import Menu from "./menu";
import ButtonJobs from "./btn-jobs";
import BurgerIcon from "./burger-icon"

const Navbar = () => {
    const [statusBurgerIcon, changeBurgerIcon] = useState(false)

    useEffect(() => {
        let lastScroll = 0;

        window.addEventListener("scroll", () => {
            const scrollUp = "scroll-up";
            const scrollDown = "scroll-down";
            const currentScroll = window.pageYOffset;
            const navbar = document.getElementById("navbar")

            if (currentScroll <= 0) {
                navbar?.classList.remove(scrollUp);
                return;
            }

            if (
                currentScroll > lastScroll &&
                !navbar?.classList.contains(scrollDown)
            ) {
                navbar?.classList.remove(scrollUp);
                navbar?.classList.add(scrollDown);
            } else if (
                currentScroll < lastScroll &&
                navbar?.classList.contains(scrollDown)
            ) {
                navbar?.classList.remove(scrollDown);
                navbar?.classList.add(scrollUp);
            }

            lastScroll = currentScroll;
        });
    })


    return (
        <Header id="navbar">
            <BackBtn href="#back">Voltar para o site</BackBtn>
            <BurgerIcon onClick={() => changeBurgerIcon(!statusBurgerIcon)} active={statusBurgerIcon} />
            <Menu open={statusBurgerIcon} />
            <ButtonJobs>Ver nossas vagas</ButtonJobs>
        </Header>
    )
}

const Header = styled.header`
    background-color: #fff;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    transition: transform 0.4s;

    &.scroll-up {
        transform: none;
    }

    &.scroll-down {
        transform: translate3d(0, -100%, 0);
    }

    @media only screen and (min-width: 1366px) {
        padding: 0 20px;
    }
`;

const BackBtn = styled.a`
    display: none;
    width: 200px;
    margin: 0 20px;

    @media only screen and (min-width: 1366px) {
        display: inline-block;
    }
`

export default Navbar;