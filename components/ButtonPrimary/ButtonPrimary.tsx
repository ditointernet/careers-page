import styled from 'styled-components'
import { COLORS, GRID } from "@ditointernet/uai-foundation";

const ButtonPrimary = styled.a`
    padding: ${GRID(0)};
    background-color: ${COLORS.GREEN_MAIN};
    outline: none;
    border: ${GRID(0)};
    border-radius: ${GRID(7)};
    color: ${COLORS.WHITE};
    position: relative;
    cursor: pointer;
    overflow: hidden;
    font-size: ${GRID(2)};
    font-weight: 500;
    display: flex;
    min-width: ${GRID(23.75)};
    min-height: ${GRID(6)};
    display: flex;
    align-items: center;
    justify-content: center;

    &:active { 
        background-color: rgb(0 189 106 / 80%)
    }
`;

export default ButtonPrimary