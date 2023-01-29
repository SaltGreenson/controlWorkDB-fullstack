import React from "react";

import styled, { css } from "styled-components";

import { Colors } from "@/styles/colors";

export type OptionPropsTypes = {
  bgImageUrl?: string;
};

interface ISelectStyled
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  error?: string;
  width: string;
}

export const SelectStyled = styled.select<ISelectStyled>`
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${({ width = "100%" }) => width};
  height: 44px;
  padding: 0 25px 0 2%;
  margin: 0;
  font-size: 15px;
  font-weight: 400;
  font-family: inherit;
  line-height: 15px;
  color: ${Colors.INPUT_FONT_COLOR};
  background-color: ${Colors.WHITE};
  border: 1px solid ${Colors.LINE_COLOR};
  outline: none;
  overflow: hidden;
  cursor: pointer;
  appearance: none;

  &:focus {
    outline: 1px solid ${Colors.DARK_BLUE};
  }

  &:active {
    outline: 1px solid ${Colors.DARK_BLUE};
  }

  &::placeholder {
    color: ${Colors.PLACEHOLDER_COLOR};
  }

  ${({ error }) =>
    error &&
    css`
      border: 1px solid ${Colors.ERROR_BORDER_COLOR};

      &:focus {
        border: 1px solid ${Colors.ERROR_BORDER_COLOR};
        outline: 1px solid ${Colors.ERROR_BORDER_COLOR};
      }

      &:active {
        border: 1px solid ${Colors.ERROR_BORDER_COLOR};
        outline: 1px solid ${Colors.ERROR_BORDER_COLOR};
      }
    `}
`;

export const OptionStyled = styled.option<OptionPropsTypes>``;
