import React from "react";

import { ArrowStyled } from "./Arrow-styles";
import { Colors } from "@/styles/colors";

export interface ArrowPropsTypes
  extends React.BaseHTMLAttributes<HTMLDivElement> {
  color?: Colors.LINK_COLOR | Colors.BLACK | string;
  clicked?: boolean;
  hasPointerEvents?: boolean;
  isRelative?: boolean;
}

const Arrow = ({ ...props }: ArrowPropsTypes): JSX.Element => (
  <ArrowStyled {...props} />
);

export default Arrow;
