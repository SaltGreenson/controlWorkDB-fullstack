import styled, { css } from "styled-components";

import { Colors } from "@/styles/colors";

export type LabelDescriptionPropsType = {
  color?: Colors.ORANGE | Colors.TITLE_COLOR | Colors.LABEL_COLOR | string;
  error?: string;
  fontSize?: "12px" | "16px" | string;
  lineHeight?: "15px" | "16px" | "21.6px" | "23px" | string;
  margin?: string;
  padding?: string;
  width?: string;
};

export const LabelDescription = styled.label<LabelDescriptionPropsType>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  width: ${({ width = "100%" }) => width};
  padding: ${({ padding = "0" }) => padding};
  margin: ${({ margin = "unset" }) => margin};
  font-family: "Gotham Pro Medium", serif;
  font-size: ${({ fontSize = "14px" }) => fontSize};
  color: ${({ color = Colors.BLACK }) => color};
  hyphens: auto;

  &:focus-within {
    color: ${({ error }) => !error && Colors.DARK_BLUE};
  }

  ${({ error }) =>
    error &&
    css`
      color: ${Colors.RED};
    `}
`;

export const SpanRequired = styled.span`
  position: absolute;
  color: ${Colors.ORANGE};
`;
