import React, { ReactNode } from "react";
import { FlexBlock } from "../Block";
import { Pencil } from "../Signs";

import {
  StyledLarge,
  StyledMedium,
  StyledSmall,
  StyledSmallThin,
} from "./Title-styles";

interface TitleProps extends React.BaseHTMLAttributes<HTMLHeadElement> {
  children: ReactNode;
  fontSize?: string;
  type: "small" | "medium" | "large" | "edit" | "thin";
}

const Title = ({
  children,
  fontSize,
  type,
  ...props
}: TitleProps): JSX.Element => {
  switch (type) {
    case "small": {
      return <StyledSmall {...props}>{children}</StyledSmall>;
    }
    case "medium": {
      return <StyledMedium {...props}>{children}</StyledMedium>;
    }
    case "large": {
      return <StyledLarge {...props}>{children}</StyledLarge>;
    }
    case "thin": {
      return (
        <StyledSmallThin fontSize={fontSize} {...props}>
          {children}
        </StyledSmallThin>
      );
    }
    case "edit": {
      return (
        <FlexBlock justify="space-between" align="center" minWidth="164px">
          <StyledSmallThin fontSize={fontSize}>{children}</StyledSmallThin>
          <Pencil {...props} />
        </FlexBlock>
      );
    }
  }
};

export default Title;
