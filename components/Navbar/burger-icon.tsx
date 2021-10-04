import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Burger = styled.div`
    display: inline-block;

    & .line{
        width: 26px;
        height: 3px;
        background-color: #223154;
        display: block;
        margin: 4px 1px;
        border-radius: 5px;
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
`;

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

export default BurgerIcon