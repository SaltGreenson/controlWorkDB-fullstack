import { Colors } from "@/styles/colors";
import styled from "styled-components";

export const StyledSmallInput = styled.input`
  position: relative;
  width: 60px;
  height: 30px;
  line-height: 30px;
  border-radius: 50px;
  font-family: inherit;
  font-size: 15px;
  outline: none;
  transition: border 300ms;
  border: 1px solid ${Colors.LINE_COLOR};
  color: ${Colors.INPUT_FONT_COLOR};
  text-align: center;
  &:focus {
    border: 1px solid ${Colors.DARK_BLUE};
  }
`;
