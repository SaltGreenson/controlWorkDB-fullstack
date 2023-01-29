import styled from "styled-components";

import { Colors } from "@/styles/colors";

export const ErrorLabelStyled = styled.label<{ display?: "inline-block" }>`
  display: block;
  font-size: 14px;
  color: ${Colors.RED};
  line-height: 15px;
`;
