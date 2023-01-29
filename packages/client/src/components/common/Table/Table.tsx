import Paragraph from "@/components/common/Paragraph";
import {
  StyledTable,
  StyledTD,
  StyledTH,
  StyledTR,
} from "@/components/common/Table/table-styles";
import { Colors } from "@/styles/colors";
import React, { ReactNode } from "react";

interface TableProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export const Table = ({ children, ...props }: TableProps) => {
  return (
    <StyledTable {...props}>
      <tbody> {children}</tbody>
    </StyledTable>
  );
};

export const TR = ({ children, ...props }: TableProps) => {
  return <StyledTR {...props}>{children}</StyledTR>;
};

export const TD = ({ children, ...props }: TableProps) => {
  return (
    <StyledTD {...props}>
      <Paragraph fontSize="14px" lineHeight="14px" color={Colors.BLACK}>
        {children}
      </Paragraph>
    </StyledTD>
  );
};

export const TH = ({ children, ...props }: TableProps) => {
  return (
    <StyledTH {...props}>
      <Paragraph fontSize="12px" lineHeight="12px" color={Colors.BLACK} bold>
        {children}
      </Paragraph>
    </StyledTH>
  );
};
