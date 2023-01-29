import styled from "styled-components";

import { Colors } from "@/styles/colors";

export const StyledLarge = styled.h2`
  font-family: "Gotham Pro Bold", serif;
  font-size: 29px;
  line-height: 29px;
  color: ${Colors.BLACK};
`;

export const StyledMedium = styled.h3`
  padding-top: 2px;
  font-family: "Gotham Pro Bold", serif;
  font-size: 24px;
  line-height: 23px;
  color: ${Colors.BLACK};
`;

export const StyledSmall = styled.h4<{ fontSize?: string }>`
  font-family: "Gotham Pro Bold", serif;
  font-size: ${({ fontSize = "16px" }) => fontSize};
  line-height: ${({ fontSize = "16px" }) => fontSize};
  color: ${Colors.WHITE};
`;

export const StyledSmallThin = styled(StyledSmall)`
  padding-top: 2px;
  font-family: "Gotham Pro Medium", serif;
  font-weight: 500;
  color: ${Colors.BLACK};
`;
