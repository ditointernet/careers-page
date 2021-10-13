import React, { useState } from "react"
import BurgerIcon from "./burger-icon"
import styled from 'styled-components'
import ButtonJobs from "./btn-jobs";
import MenuList from "./menu";

const Header = styled.header`
    font-family: Poppins;
    background-color: #fff;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;

    @media only screen and (min-width: 1440px) {
        padding: 0 20px;
    }
`;

const BackBtn = styled.a`
    display: none;
    width: 200px;
    margin: 0 20px;

    @media only screen and (min-width: 1440px) {
        display: inline-block;
    }
`

export const Navbar = () => {
    const [statusBurgerIcon, changeBurgerIcon] = useState(false)

    return (
        <Header>
            <BackBtn href="#back">Voltar para o site</BackBtn>
            <BurgerIcon onClick={() => changeBurgerIcon(!statusBurgerIcon)} active={statusBurgerIcon} />
            <MenuList open={statusBurgerIcon} />
            <ButtonJobs>Ver nossas vagas</ButtonJobs>
        </Header>
    )
}
