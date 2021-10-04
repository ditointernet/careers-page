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
        max-height: 264px;
    }
`;

const List = styled.ul`
    width: 100%;
    list-style: none;
    padding: 12px 0;
    margin: 0;
`;


const Item = styled.li`
    color: #223154;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    padding: 12px 24px;

    &.active {
        color: #00BD6A;
    }
`;
interface IProps {
    open: boolean
}

const MenuList = ({ open }: IProps) => (
    <Menu className={`${open && "open"}`}>
        <List> 
            <Item className="active">Sobre a Dito</Item>
            <Item>2</Item>
            <Item>3</Item>
            <Item>4</Item>
            <Item>5</Item>
        </List>
    </Menu>
)

export default MenuList