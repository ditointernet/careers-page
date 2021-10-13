import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Menu = styled.div`
    position: absolute;
    top: 95px;
    background-color: #fff;
    width: calc(100% - 30px);
    border-radius: 16px;
    max-height: 0px;
    overflow: hidden;
    
    transition: max-height 0.2s linear;
    
    &.open {
        max-height: 312px;
    }

    @media only screen and (min-width: 1440px) {
        position: relative;
        background-color: transparent;
        border-radius: 0;
        top: 0;
        max-height: 312px;
        width: 100%;
    }
`;

const List = styled.ul`
    width: 100%;
    list-style: none;
    padding: 12px 0;
    margin: 0;

    @media only screen and (min-width: 1440px) {
        display: flex;
        justify-content: end;
        padding: 0;

        a:last-child {
            display: none;
        }
    }
`;


const Item = styled.li`
    color: #223154;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    padding: 12px 24px;

    &.active {
        color: #00BD6A;

        &::after {
            width: 80%;
        }
    }

    &:hover {
        background: #00BD6A;
        color: #fff;

        &.active {
            color: #fff;
            background-color: #00BD6A;
        }
    }

    @media only screen and (min-width: 1440px) {
        padding: 0;
        margin: 0 20px;
        position: relative;
        display: inline-block;

        &::after {
            content: "";
            position: absolute;
            top: 22px;
            height: 2px;
            width: 0%;
            right: 0;
            background-color: #00BD6A;
            transition: 0.5s ease all .1s;
        }

        &:hover {
            background: transparent;
            color: #223154;

            &.active {
                color: #00BD6A;
                background: transparent;

                &::after {
                    background-color: #00BD6A;
                }
            }

            &::after {
                width: 80%;
                transition: 0.3s ease all;
                background-color: #223154;
            }
        }
    }
`;
interface IProps {
    open: boolean
}

const MenuList = ({ open }: IProps) => (
    <Menu className={`${open && "open"}`}>
        <List>
            <a href="#sobre"><Item className="active">Sobre a Dito</Item></a>
            <a href="#tecnologias"><Item>Nossas tecnologias</Item></a>
            <a href="#time"><Item>Nosso time</Item></a>
            <a href="#beneficios"><Item>Benefícios</Item></a>
            <a href="#processo"><Item>Nosso processo seletivo</Item></a>
            <a href="#back"><Item>Voltar para o site</Item></a>
        </List>
    </Menu>
)

export default MenuList