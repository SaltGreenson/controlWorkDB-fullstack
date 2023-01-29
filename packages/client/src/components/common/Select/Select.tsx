import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import { dimensionConfig } from "@/components/common/Select/config";
import { OptionStyled, SelectStyled } from "./Select-styles";
import { CustomBlock, RelativeBlock } from "../Block";
import { CustomLabel, ErrorLabel } from "../Labels";
import { Arrow } from "../Signs";

type ElementType = {
  label: string;
  value: string;
};

interface IPropsTypes extends React.SelectHTMLAttributes<HTMLSelectElement> {
  dimension?: "small" | "large";
  elements?: ElementType[];
  error?: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  register?: UseFormRegisterReturn<string>;
}

const Select = ({
  elements,
  label,
  error,
  required,
  dimension,
  placeholder,
  register,
  defaultValue,
  ...selectProps
}: IPropsTypes): JSX.Element => (
  <CustomBlock>
    <CustomLabel
      width={dimensionConfig[dimension ?? "large"]?.width}
      error={error}
    >
      {label}
      <RelativeBlock
        maxHeight={dimensionConfig[dimension ?? "large"]?.maxHeight}
        width={dimensionConfig[dimension ?? "large"]?.width}
      >
        <Arrow />
        <SelectStyled
          defaultValue={defaultValue ?? ""}
          width={dimensionConfig[dimension ?? "large"]?.width}
          error={error}
          {...register}
          {...selectProps}
        >
          <OptionStyled value="" disabled hidden>
            {placeholder ?? ""}
          </OptionStyled>

          {elements &&
            elements.map((el) => (
              <OptionStyled value={el.value} key={el.value}>
                {el.label}
              </OptionStyled>
            ))}
        </SelectStyled>
      </RelativeBlock>
      {error && required && <ErrorLabel>{error}</ErrorLabel>}
    </CustomLabel>
  </CustomBlock>
);

export default Select;
