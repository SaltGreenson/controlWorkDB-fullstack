import styled, { css } from "styled-components";

import { Colors } from "@/styles/colors";

export const StyledSmallSearchInput = styled.input`
  position: relative;
  width: 30px;
  height: 30px;
  padding-left: 30px;
  line-height: 30px;
  border-radius: 50px;
  font-family: inherit;
  font-size: 15px;
  cursor: pointer;
  overflow: hidden;
  background: transparent url(/Icons/searchIcon.svg) no-repeat 7px 5px;
  transition: width 400ms, background-position 400ms;
  outline: none;

  &:focus {
    width: 130px;
    cursor: text;
    color: ${Colors.INPUT_FONT_COLOR};
    outline: 1px solid ${Colors.DARK_BLUE};
    background-position: 7px 5px;
  }
`;

export const StyledLargeSearchInput = styled.input<{ error?: string }>`
  height: 44px;
  width: 100%;
  outline: none;
  padding-right: 20px;
  padding-left: 30px;
  font-family: "Gotham Pro Medium", serif;
  font-size: 18px;
  color: ${Colors.BLACK};
  border: 2px solid ${Colors.LINE_COLOR};
  border-radius: 23px;
  background: ${Colors.WHITE} url(/Icons/searchIcon.svg) no-repeat 7px 45%;
  transition: border 300ms;

  &:focus {
    border: 2px solid ${Colors.DARK_BLUE};
  }

  &:active {
    border: 2px solid ${Colors.DARK_BLUE};
  }

  ${({ error }) =>
    error &&
    css`
      animation: shake 300ms ease-out;

      @keyframes shake {
        0% {
          transform: translateX(-3px);
          border: 2px solid ${Colors.RED};
        }
        25% {
          transform: translateX(3px);
        }
        50% {
          transform: translateX(-3px);
        }
        100% {
          transform: translateX(0px);
        }
      }
    `}
`;
