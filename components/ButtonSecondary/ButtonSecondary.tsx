import styled from 'styled-components'
import { COLORS, GRID } from "@ditointernet/uai-foundation";

const ButtonPrimary = styled.a`
    color: ${COLORS.GREEN_MAIN};
    cursor: pointer;
    border: 1px solid ${COLORS.GREEN_MAIN};
    outline: none;
    padding: 7px 16px;
    display: inline-block;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    border-radius: ${GRID(1)};
    background-color: transparent;

    @media only screen and (min-width: 1024px) {
        padding: 10px 24px;
        font-size: 14px;
        line-height: 20px;
    }
`;

export default ButtonPrimary