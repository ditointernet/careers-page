import React, { useState } from "react"
import BurgerIcon from "./burger-icon"
import styled from 'styled-components'
import ButtonJobs from "./btn-jobs";
import MenuList from "./menu";

const Header = styled.header`
    background-color: #fff;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
`;

export const Navbar = () => {
    const [statusBurgerIcon, changeBurgerIcon] = useState(false)

    return (
        <Header>
            <BurgerIcon onClick={() => changeBurgerIcon(!statusBurgerIcon)} active={statusBurgerIcon}/>
            <ButtonJobs>Ver nossas vagas</ButtonJobs>
            <MenuList open={statusBurgerIcon} />
        </Header>
    )
}
