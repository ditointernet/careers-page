import styled from 'styled-components'
import { COLORS, GRID } from "@ditointernet/uai-foundation";

const ButtonPrimary = styled.a`
    color: ${COLORS.WHITE};
    cursor: pointer;
    outline: none;
    padding: 12px 24px;
    min-width: 191px;
    font-size: ${GRID(2)};
    font-weight: 500;
    line-height: 24px;
    border-radius: ${GRID(7)};
    background-color: ${COLORS.GREEN_MAIN};
`;

export default ButtonPrimary