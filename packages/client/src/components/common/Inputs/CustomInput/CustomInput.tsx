import React, { RefObject, useEffect, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import { CustomBlock, RelativeBlock } from "../../Block";
import { CustomLabel, ErrorLabel } from "../../Labels";

import { InputStyled, PasswordTitle } from "./CustomInput-style";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label: string;
  marginContainer?: string;
  isDarkTheme?: boolean;
  register?: UseFormRegisterReturn<string>;
  width?: "5rem" | "12rem" | "21.4rem" | string;
  ref?: RefObject<HTMLInputElement>;
}

const CustomInput = ({
  error,
  label,
  marginContainer,
  register,
  width,
  type,
  ref,
  ...inputProps
}: CustomInputProps): JSX.Element => {
  const [clicked, setClicked] = useState(false);
  const [passwordText, setPasswordText] = useState("Show");
  const [inputType, setInputType] = useState(type || "text");

  useEffect(() => {
    setPasswordText(clicked ? "Hide" : "Show");

    if (type === "password") {
      setInputType(clicked ? "text" : "password");
    }
  }, [clicked, type]);

  const handleOnClick = () => () => {
    setClicked((prev) => !prev);
  };

  return (
    <CustomBlock margin={marginContainer} width={width}>
      <CustomLabel error={error} width={width}>
        {label}
        <RelativeBlock>
          <InputStyled
            error={error}
            type={inputType}
            initialType={type}
            {...register}
            {...inputProps}
            ref={ref}
          />
          {type === "password" && (
            <PasswordTitle onClick={handleOnClick()}>
              {passwordText}
            </PasswordTitle>
          )}
        </RelativeBlock>
        {error && <ErrorLabel>{error}</ErrorLabel>}
      </CustomLabel>
    </CustomBlock>
  );
};

export default CustomInput;
