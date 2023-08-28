import styled from "styled-components";
import { COLORS_NEXT, GRID } from "@ditointernet/uai-foundation";

const ButtonSecondary = styled.a`
  color: ${COLORS_NEXT.BRAND.GREEN_600};
  cursor: pointer;
  border: ${GRID(0.125)} solid ${COLORS_NEXT.BRAND.GREEN_600};
  z-index: 1;
  outline: none;
  padding: ${GRID(0.875)} ${GRID(2)};
  display: inline-block;
  font-size: ${GRID(1.5)};
  font-weight: 500;
  line-height: ${GRID(2.25)};
  border-radius: ${GRID(1)};
  background-color: transparent;

  @media only screen and (min-width: 1024px) {
    padding: ${GRID(1.25)} ${GRID(3)};
    font-size: ${GRID(1.75)};
    line-height: ${GRID(2.5)};
  }

  &:hover {
    background-color: ${COLORS_NEXT.BRAND.GREEN_100};
  }
`;

export default ButtonSecondary;
