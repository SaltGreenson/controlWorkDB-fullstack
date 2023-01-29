import React, { ReactNode } from "react";

import { ErrorLabelStyled } from "./ErrorLabel-styles";

export interface ErrorLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  display?: "inline-block";
}

const ErrorLabel = ({ children, ...rest }: ErrorLabelProps): JSX.Element => (
  <ErrorLabelStyled {...rest}>{children}</ErrorLabelStyled>
);

export default ErrorLabel;
