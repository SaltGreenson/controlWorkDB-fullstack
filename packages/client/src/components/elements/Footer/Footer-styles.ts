import styled from "styled-components";

import { Colors } from "@/styles/colors";

export const StyledFooterContainer = styled.footer`
  min-height: 350px;
  width: 100%;
  position: relative;
  background-color: ${Colors.BLACK};
`;

export const EmailSubscribeContainer = styled.div`
  display: flex;
  gap: 12px;
  min-width: 500px;
  flex-wrap: wrap;
  flex-direction: row;

  @media (max-width: 768px) {
    min-width: unset;
  }
`;

export const InputContainer = styled.div`
  width: 360px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  width: 140px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
