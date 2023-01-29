import { Colors } from "@/styles/colors";
import styled from "styled-components";

export const StyledTable = styled.table`
  border-collapse: collapse;
  border: 4px solid ${Colors.ICE};
`;

export const StyledTR = styled.tr`
  border-bottom: 1px solid ${Colors.LIGHT_ICE};
  user-select: none;
  &:hover {
    background-color: ${Colors.LIGHT_ICE};
  }
`;

export const StyledTD = styled.td`
  padding: 15px 20px;
`;

export const StyledTH = styled.th`
  padding: 5px 15px;
`;
