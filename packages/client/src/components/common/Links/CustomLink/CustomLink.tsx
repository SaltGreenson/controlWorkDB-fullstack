import React, { ReactNode } from "react";
import Link from "next/link";

import { StyledA, StyledAPropsTypes } from "./CustomLink-styles";

export interface CustomLinkProps
  extends React.BaseHTMLAttributes<HTMLBaseElement> {
  children: ReactNode;
  href: string;
}

const CustomLink = ({
  children,
  href,
  ...aProps
}: CustomLinkProps & StyledAPropsTypes): JSX.Element => (
  <Link href={href} legacyBehavior>
    <StyledA {...aProps}>{children}</StyledA>
  </Link>
);

export default CustomLink;
