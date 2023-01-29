import styled from "styled-components";

import { Colors } from "@/styles/colors";

type ImgStyledProps = {
  height: string;
  width: string;
};

export const StyledImage = styled.img`
  max-width: 680px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: ${Colors.DARK_GREY};

  @media (max-width: 1024px) {
    max-width: 540px;
  }

  @media (max-width: 768px) {
    max-width: 350px;
  }

  @media (max-width: 320px) {
    max-width: 270px;
  }
`;

export const StyledImageContainer = styled.div<
  ImgStyledProps & { needDisplay?: boolean }
>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  cursor: ${({ needDisplay }) => (needDisplay ? "pointer" : "unset")};
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;

    & img {
      max-width: unset;
    }
  }
`;
