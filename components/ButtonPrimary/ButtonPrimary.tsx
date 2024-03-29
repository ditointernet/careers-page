import styled from "styled-components";
import { COLORS_NEXT, GRID } from "@ditointernet/uai-foundation";

const ButtonPrimary = styled.a`
  color: ${COLORS_NEXT.WHITE};
  cursor: pointer;
  z-index: 1;
  outline: none;
  display: inline-block;
  padding: ${GRID(1.5)} ${GRID(3)};
  min-width: ${GRID(23.875)};
  font-size: ${GRID(2)};
  font-weight: 500;
  line-height: ${GRID(3)};
  border-radius: ${GRID(7)};
  background-color: ${COLORS_NEXT.BRAND.GREEN_600};

  &:hover {
    background-color: ${COLORS_NEXT.BRAND.GREEN_900};
  }
`;

export default ButtonPrimary;
