import React from 'react'
import styled from 'styled-components'
import { COLORS, GRID } from "@ditointernet/uai-foundation";

interface IProps {
    active: boolean
    onClick: () => void
}

const BurgerIcon = ({ active, onClick }: IProps) => (
    <Burger
        onClick={onClick}
        className={`${active && "active"}`}
    >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
    </Burger>
)

const Burger = styled.div`
    display: inline-block;

    & .line{
        width: ${GRID(3.25)};
        height: ${GRID(0.375)};
        background-color: ${COLORS.NAVY_DARK};
        display: block;
        margin: ${GRID(0.5)} ${GRID(0.125)};
        border-radius: ${GRID(0.625)};
        transition: all 0.3s ease-in-out;
    }
    
    &:hover{
        cursor: pointer;
    }
    
    &.active .line:nth-child(2){
        opacity: 0;
    }

   
    &.active .line:nth-child(1){
        transform: translateY(7px) rotate(45deg);
    }
    
    &.active .line:nth-child(3){
        transform: translateY(-7px) rotate(-45deg);
    }

    @media only screen and (min-width: 1366px) {
        display: none;
    }
`;

export default BurgerIcon