import styled from "styled-components";

import { Colors } from "@/styles/colors";

export const StyledEditingContainer = styled.div`
  z-index: 100;
  max-width: 700px;
  min-width: 700px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.08);
  background-color: ${Colors.WHITE};

  @media (max-width: 768px) {
    max-width: 100%;
    min-width: 100vw;
    min-height: 100vh;
    width: 100%;
  }
`;

export const StyledHeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  padding: 20px;
  border-bottom: 2px solid ${Colors.DARK_GREY};
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Closer = styled.span`
  width: 32px;
  height: 32px;
  cursor: pointer;
  opacity: 0.7;
  transition: 300ms;

  &:hover {
    opacity: 1;
  }

  &:before,
  &:after {
    content: " ";
    position: absolute;
    left: 15px;
    height: 33px;
    width: 2px;
    background-color: ${Colors.MEDIUM_BLACK};
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

export const DescriptionContainer = styled.div`
  padding: 20px;
  border-bottom: 2px solid ${Colors.DARK_GREY};
`;

export const DescriptionTitleContainer = styled.div`
  margin-bottom: 2rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem 2rem 1rem 0;

  @media (max-width: 768px) {
    justify-content: center;
    padding: 1rem 0;
  }
`;
