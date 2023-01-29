import styled, { css } from "styled-components";

import { Colors } from "@/styles/colors";

export interface StyledAPropsTypes {
  bold?: boolean;
  color?:
    | Colors.ORANGE
    | Colors.LINK_COLOR
    | Colors.LABEL_COLOR
    | Colors.LIGHT_BLUE
    | string;
  hoverColor?: string;
  lineHeight?: "15px" | "16px" | "21.6px" | "23px" | string;
  fontSize?: "12px" | "15px" | string;
  fontWidth?: string;
}

export const StyledA = styled.a<StyledAPropsTypes>`
  font-size: ${({ fontSize = "15px" }) => fontSize};
  font-weight: ${({ bold, fontWidth }) => (bold ? "500" : fontWidth ?? "400")};
  line-height: ${({ lineHeight = "15px" }) => lineHeight};
  color: ${({ color = Colors.LIGHT_BLUE }) => color};
  cursor: pointer;
  transition: 300ms;

  &:hover {
    color: ${({ hoverColor }) => hoverColor};
  }

  ${({ bold }) =>
    bold &&
    css`
      font-family: "Gotham Pro Medium", serif;
    `}
`;
