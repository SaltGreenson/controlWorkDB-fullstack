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

export const SearchFormContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-right: 1rem;

  @media (max-width: 1024px) {
    margin-right: 0;
    margin-left: 1rem;
  }

  @media (max-width: 767px) {
    width: 80%;
  }

  @media (min-width: 540px) {
    width: 100%;
  }

  @media (max-width: 320px) {
    gap: 5px;
    width: 75%;
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

export const LogoWrapper = styled.div`
  height: 50px;
  position: absolute;
  left: 3rem;

  @media (max-width: 768px) {
    left: 2rem;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const MenuItemList = styled.li<{ isActive?: boolean }>`
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

  & > a {
    white-space: nowrap;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const BurgerMenuWrapper = styled.div`
  display: none;
  position: absolute;
  right: 5px;
  top: 15px;

  @media (max-width: 1024px) {
    display: block;
  }
`;

export const ProfileMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (max-width: 1024px) {
    gap: 1rem;
    display: none;
  }
`;
