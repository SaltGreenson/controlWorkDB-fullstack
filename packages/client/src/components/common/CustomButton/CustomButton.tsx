import React, { ReactNode } from "react";

import Paragraph from "@/components/common/Paragraph";
import { Colors } from "@/styles/colors";

import { buttonSizesConfig } from "@/components/common/CustomButton/config";
import {
  PrimaryButton,
  PrimaryProps,
  SecondaryButton,
  TextButton,
} from "@/components/common/CustomButton/CustomButton-styles";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color?: Colors.WHITE | Colors.BLACK | string;
  variant: "primary" | "secondary" | "text";
  size?: "small" | "medium" | "large";
}

const CustomButton = ({
  children,
  color = Colors.WHITE,
  size,
  variant,
  ...props
}: IButtonProps & PrimaryProps): JSX.Element =>
  variant === "primary" ? (
    <PrimaryButton width={buttonSizesConfig[size ?? "medium"].width} {...props}>
      <Paragraph fontSize="15px" color={color} bold>
        {children}
      </Paragraph>
    </PrimaryButton>
  ) : variant === "secondary" ? (
    <SecondaryButton
      width={buttonSizesConfig[size ?? "medium"].width}
      {...props}
    >
      <Paragraph fontSize="15px" color={Colors.DARK_BLUE} bold margin="0">
        {children}
      </Paragraph>
    </SecondaryButton>
  ) : (
    <TextButton {...props}>
      <Paragraph fontSize="14px" color={Colors.DARK_BLUE} margin="0">
        {children}
      </Paragraph>
    </TextButton>
  );

export default CustomButton;
