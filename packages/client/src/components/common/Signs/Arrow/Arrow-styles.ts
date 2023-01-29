import styled, { css } from "styled-components";

import { ArrowPropsTypes } from "./Arrow";

export const ArrowStyled = styled.div<ArrowPropsTypes>`
  z-index: 100;
  width: 15px;
  height: 9px;
  background: url(/Icons/Arrow.svg) no-repeat;
  pointer-events: ${({ hasPointerEvents }) =>
    hasPointerEvents ? "unset" : "none"};
  transition: 0.3s ease-in;

  ${({ isRelative }) =>
    !isRelative &&
    css`
      position: absolute;
      top: 40%;
      right: 10px;
    `}

  ${({ hasPointerEvents }) =>
    hasPointerEvents &&
    css`
      z-index: 1;
      cursor: pointer;
    `}

  ${({ clicked }) =>
    clicked &&
    css`
      transform: rotate(-180deg);
    `}
`;
