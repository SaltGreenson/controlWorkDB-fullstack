import React from "react";

import styled, { css } from "styled-components";

import { Colors } from "@/styles/colors";

export interface IInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: string;
}

export const StyledInputFile = styled.input<IInputProps>`
  width: 49px;
  height: 15px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  font-size: 0;
  cursor: pointer;
  outline: none;

  ${({ error }) =>
    error &&
    css`
      border: 2px solid ${Colors.ERROR_BORDER_COLOR};
    `}
`;

export const PhotoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 10px;
  margin: 1rem 0;
`;
