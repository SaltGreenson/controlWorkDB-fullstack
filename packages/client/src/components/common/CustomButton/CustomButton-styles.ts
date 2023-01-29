import { Colors } from "@/styles/colors";
import styled from "styled-components";

export type PrimaryProps = {
  width?: string;
  bgColor?: string;
  bgHover?: string;
};

export const PrimaryButton = styled.button<PrimaryProps>`
  width: ${({ width = "206px" }) => width};
  height: 42px;
  background-color: ${({ bgColor = Colors.DARK_BLUE }) => bgColor};
  border-radius: 40px;
  cursor: pointer;
  transform: scale(1);
  transition: 300ms;

  &:hover {
    transform: scale(1.02);
    background-color: ${({ bgHover = Colors.HOVER_DARK_BLUE }) => bgHover};
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  background-color: ${Colors.LIGHT_ICE};

  &:hover {
    background-color: ${Colors.ICE};
  }
`;

export const TextButton = styled.button`
  background-color: transparent;
  cursor: pointer;
`;
