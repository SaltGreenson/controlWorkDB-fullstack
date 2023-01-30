import styled, { css } from "styled-components";
import { Colors } from "@/styles/colors";

export const NavStyled = styled.nav`
  z-index: 2;
  width: 100%;
  background-color: ${Colors.WHITE};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    height: 60px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  height: 60px;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    height: 60px;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  gap: 15px;
  justify-content: flex-end;

  @media (max-width: 1024px) {
    justify-content: flex-start;
  }
`;

export const MenuItemList = styled.li<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  border-radius: 6px;
  transition: 400ms;
  cursor: pointer;

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${Colors.ACTIVE_LINK_BACKGROUND};
    `}

  & > a {
    padding: 10px;
    white-space: nowrap;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;
