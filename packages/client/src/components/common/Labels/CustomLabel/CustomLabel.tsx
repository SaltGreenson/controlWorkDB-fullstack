import React, { ReactNode } from "react";

import {
  LabelDescription,
  LabelDescriptionPropsType,
} from "./CustomLabel-styles";

export interface CustomLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

const CustomLabel = ({
  children,
  ...rest
}: CustomLabelProps & LabelDescriptionPropsType): JSX.Element => (
  <LabelDescription {...rest}>{children}</LabelDescription>
);

export default CustomLabel;
