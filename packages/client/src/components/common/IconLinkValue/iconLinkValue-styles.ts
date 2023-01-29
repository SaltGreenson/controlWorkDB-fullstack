import { Colors } from "@/styles/colors";
import styled, { css } from "styled-components";

export const IconLabelContainer = styled.div<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 18px 8px 15px;
  border-radius: 6px;
  cursor: pointer;
  user-select: none;
  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${Colors.ACTIVE_LINK_BACKGROUND};
    `};
`;
