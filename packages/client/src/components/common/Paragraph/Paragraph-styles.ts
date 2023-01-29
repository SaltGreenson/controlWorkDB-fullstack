import styled, { css } from "styled-components";

import { Colors } from "@/styles/colors";

export interface IStyledPPropsTypes {
  bold?: boolean;
  color?: Colors.ORANGE | Colors.TITLE_COLOR | Colors.LABEL_COLOR | string;
  fontSize?: "12px" | "16px" | string;
  fontWidth?: string;
  lineHeight?: "15px" | "16px" | "21.6px" | "23px" | string;
  margin?: "0" | string;
}

export const StyledP = styled.p<IStyledPPropsTypes>`
  margin: ${({ margin = "0 5px 0 0" }) => margin};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ bold, fontWidth }) => (bold ? "500" : fontWidth ?? "400")};
  line-height: ${({ lineHeight = "15px" }) => lineHeight};
  color: ${({ color = Colors.LABEL_COLOR }) => color};
  ${({ bold }) =>
    bold &&
    css`
      font-family: "Gotham Pro Medium", serif;
    `}
`;

export interface IStyledOutlinedPropsTypes {
  outlinedFontColor?: Colors.GREEN | Colors.ORANGE | Colors.RED | string;
  outlinedBgColor?:
    | Colors.LIGHT_GREEN
    | Colors.LIGHT_ORANGE
    | Colors.LIGHT_RED
    | string;
}

export const StyledOutlinedP = styled(StyledP)<IStyledOutlinedPropsTypes>`
  display: inline-block;
  padding: 0.5rem;
  background-color: ${({ outlinedBgColor = Colors.LIGHT_ORANGE }) =>
    outlinedBgColor};
  color: ${({ outlinedFontColor }) => outlinedFontColor ?? Colors.ORANGE};
`;
