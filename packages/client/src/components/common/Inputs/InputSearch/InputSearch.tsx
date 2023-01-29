import React from "react";

import { UseFormRegisterReturn } from "react-hook-form";

import {
  StyledLargeSearchInput,
  StyledSmallSearchInput,
} from "./InputSearch-styles";

interface InputSearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "small" | "large";
  register?: UseFormRegisterReturn<string>;
  error?: string;
}

const InputSearch = ({
  variant,
  register,
  ...props
}: InputSearchProps): JSX.Element =>
  variant === "small" ? (
    <StyledSmallSearchInput {...register} {...props} />
  ) : (
    <StyledLargeSearchInput {...register} {...props} />
  );

export default InputSearch;
