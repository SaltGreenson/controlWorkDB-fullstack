import styled, { css } from "styled-components";

import { Colors } from "@/styles/colors";

type WidthHeightPropsTypes = {
  maxHeight?: string;
  maxWidth?: string;
  minWidth?: string;
  minHeight?: string;
  height?: string;
  width?: string;
};

type CustomBlockType = {
  margin?: string;
  padding?: string;
  fontSize?: string;
};

type FlexPropsTypes = {
  align?: string;
  direction?: string;
  flexWrap?: "wrap";
  gap?: string;
  justify?: string;
  justifyPhoneMode?: string;
  margin?: string;
  marginPhoneMode?: string;
  padding?: string;
};

type AbsolutePropsTypes = {
  bottom?: string;
  left?: string;
  right?: string;
  top?: string;
};

export type CircleBlockTypes = {
  bgColor?: Colors.LIGHT_GREY | Colors.GREY | Colors.DARK_GREY | string;
  isAbsolute?: boolean;
  width?: string;
};

type CartBlockTypes = {
  height?: "100%";
  width?: "100%";
};

export const CustomBlock = styled.div<WidthHeightPropsTypes & CustomBlockType>`
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
  height: ${({ height, maxHeight = "unset" }) => height ?? maxHeight};
  min-width: ${({ minWidth, width }) => minWidth ?? width};
  max-height: ${({ maxHeight = "unset" }) => maxHeight};
  max-width: ${({ maxWidth = "unset" }) => maxWidth};
  font-size: ${({ fontSize }) => fontSize};
  hyphens: auto;
`;

export const RelativeBlock = styled(CustomBlock)`
  position: relative;
  display: inline-block;
`;

export const FlexBlock = styled(CustomBlock)<FlexPropsTypes>`
  display: flex;
  flex-wrap: ${({ flexWrap }) => flexWrap};
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  gap: ${({ gap }) => gap};
`;

export const AbsoluteBlock = styled(CustomBlock)<AbsolutePropsTypes>`
  position: absolute;
  left: ${({ left }) => left};
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
`;

export const CircleBlock = styled.div<CircleBlockTypes & AbsolutePropsTypes>`
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width = "2.5rem" }) => width};
  height: ${({ width = "2.5rem" }) => width};
  border-radius: 50%;
  overflow: hidden;
  background-color: ${({ bgColor = Colors.LIGHT_ICE }) => bgColor};
  border: 2px solid white;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${({ isAbsolute, left, top, right, bottom }) =>
    isAbsolute &&
    css`
      z-index: 2;
      position: absolute;
      left: ${left ?? "unset"};
      top: ${top ?? "unset"};
      right: ${right ?? "unset"};
      bottom: ${bottom ?? "unset"};
    `}
`;

export const CartBlock = styled.div<CartBlockTypes>`
  z-index: 10;
  width: ${({ width = "265px" }) => width};
  height: ${({ height = "345px" }) => height};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.08);
  background-color: ${Colors.WHITE};
`;
