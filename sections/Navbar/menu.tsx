import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

interface IProps {
    open: boolean
}

const Menu = ({ open }: IProps) => {
    const [hash, setHash] = useState<string>('#sobre-a-dito')

    useEffect(() => {
        setHash(window.location.hash)
        window.addEventListener("hashchange", () => setHash(location.hash))
    }, [])

    const isActive = (value: string) => value == hash && "active"

    return (
        <MenuWrapper className={`${open && "open"}`}>
            <List>
                <a href="#sobre-a-dito">
                    <Item className={`${isActive("#sobre-a-dito")}`}>
                        Sobre a Dito
                    </Item>
                </a>
                <a href="#nossas-tecnologias">
                    <Item className={`${isActive("#nossas-tecnologias")}`}>
                        Nossas tecnologias
                    </Item>
                </a>
                <a href="#nosso-time">
                    <Item className={`${isActive("#nosso-time")}`}>
                        Nosso time
                    </Item>
                </a>
                <a href="#beneficios">
                    <Item className={`${isActive("#beneficios")}`}>
                        Benefícios
                    </Item>
                </a>
                <a href="#nosso-processo-seletivo">
                    <Item className={`${isActive("#nosso-processo-seletivo")}`}>
                        Nosso processo seletivo
                    </Item>
                </a>
                <a href="">
                    <Item>
                        Voltar para o site
                    </Item>
                </a>
            </List>
        </MenuWrapper >
    )
}

const MenuWrapper = styled.div`
    box-shadow: 0px 2px 8px 0px rgb(0 0 0 / 15%);
    position: absolute;
    top: 85px;
    background-color: #fff;
    width: calc(100% - 32px);
    border-radius: 16px;
    max-height: 0px;
    overflow: hidden;
    
    transition: max-height 0.2s linear;
    
    &.open {
        max-height: 312px;
    }

    @media only screen and (min-width: 1366px) {
        box-shadow: none;
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

    @media only screen and (min-width: 1366px) {
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

    @media only screen and (min-width: 1366px) {
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

export default Menu