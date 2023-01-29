import React, { ReactNode } from "react";

import { fontSizeConfig } from "@/components/common/Paragraph/config";
import {
  IStyledOutlinedPropsTypes,
  IStyledPPropsTypes,
  StyledOutlinedP,
  StyledP,
} from "./Paragraph-styles";

export interface IPropsParagraph
  extends React.BaseHTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  variant?: "small" | "medium" | "large";
  isOutlined?: boolean;
}

const Paragraph = ({
  children,
  isOutlined,
  variant,
  ...rest
}: IStyledPPropsTypes &
  IPropsParagraph &
  IStyledOutlinedPropsTypes): JSX.Element =>
  isOutlined ? (
    <StyledOutlinedP
      fontSize={fontSizeConfig[variant ?? "medium"]}
      bold
      {...rest}
    >
      {children}
    </StyledOutlinedP>
  ) : (
    <StyledP fontSize={fontSizeConfig[variant ?? "medium"]} {...rest}>
      {children}
    </StyledP>
  );

export default Paragraph;
