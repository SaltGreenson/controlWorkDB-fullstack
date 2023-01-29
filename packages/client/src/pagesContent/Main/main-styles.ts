import { Colors } from "@/styles/colors";
import styled, { css } from "styled-components";

export const StyledFormContainer = styled.div`
  background-color: ${Colors.WHITE};
  padding: 20px;
  border-radius: 6px;
`;

export const StyledCart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  height: 300px;
  padding: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.08);
  transition: 300ms;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.08);
    background-color: ${Colors.LIGHT_ICE};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 30px;
`;

export const StyledToggle = styled.div<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 10px;
  border-radius: 6px;
  transition: 400ms;
  cursor: pointer;

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${Colors.ACTIVE_LINK_BACKGROUND};
    `}
`;
