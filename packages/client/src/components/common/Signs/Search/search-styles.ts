import styled from "styled-components";

import { Colors } from "@/styles/colors";

export const SearchSign = styled.i`
  display: block;
  width: 12px;
  height: 12px;
  position: relative;
  border-radius: 100%;
  border: 2px solid ${Colors.LINK_COLOR};
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 2px;
    height: 7px;
    top: 6px;
    left: 9px;
    border-radius: 3px;
    background: ${Colors.LINK_COLOR};
    transform: rotate(-45deg);
  }

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    border-width: 3px;

    &::after {
      width: 5px;
      height: 18px;
      top: 20px;
      left: 24px;
    }
  }
`;
