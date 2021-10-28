import styled from "styled-components";
import { COLORS, GRID } from "@ditointernet/uai-foundation";

const ButtonPrimary = styled.a`
  color: ${COLORS.WHITE};
  cursor: pointer;
  outline: none;
  display: inline-block;
  padding: ${GRID(1.5)} ${GRID(3)};
  min-width: ${GRID(23.875)};
  font-size: ${GRID(2)};
  font-weight: 500;
  line-height: ${GRID(3)};
  border-radius: ${GRID(7)};
  background-color: ${COLORS.GREEN_MAIN};
`;

export default ButtonPrimary;
