import styled, { css } from "styled-components";

import { Colors } from "@/styles/colors";

export const StyledCheckbox = styled.input`
  height: 25px;
  width: 25px;
  opacity: 0;
  &:checked + span:after {
    display: block;
  }
`;

export const GeekMark = styled.span<{ error?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: transparent;
  border: 2px solid ${Colors.LINE_COLOR};
  pointer-events: none;
  &:after {
    display: none;
    width: 7px;
    height: 13px;
    position: absolute;
    left: 7px;
    bottom: 5px;
    content: "";
    border: solid ${Colors.BLUE};
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }

  ${({ error }) =>
    error &&
    css`
      border: 2px solid ${Colors.ERROR_BORDER_COLOR};
      outline: none;
    `}
`;

export const LabelWrap = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
