import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import { CustomBlock, FlexBlock, RelativeBlock } from "../../Block";
import { CustomLabel, ErrorLabel } from "../../Labels";

import { GeekMark, StyledCheckbox } from "./Checkbox-styles";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  register?: UseFormRegisterReturn<string>;
}

const Checkbox = ({
  error,
  label,
  register,
  ...props
}: CheckboxProps): JSX.Element => (
  <CustomBlock width="unset">
    <FlexBlock align="center" margin="0 0 8px 0">
      <RelativeBlock maxHeight="25px" width="25px">
        <StyledCheckbox type="checkbox" {...register} {...props} />
        <GeekMark error={error} />
      </RelativeBlock>
      <CustomLabel lineHeight={""} margin="0 0 0 8px">
        <>{label}</>
      </CustomLabel>
    </FlexBlock>
    {error && <ErrorLabel>{error}</ErrorLabel>}
  </CustomBlock>
);

export default Checkbox;
