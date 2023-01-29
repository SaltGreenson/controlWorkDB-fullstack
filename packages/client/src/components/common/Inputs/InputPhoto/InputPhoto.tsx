import React from "react";
import Image from "next/image";
import { UseFormRegisterReturn } from "react-hook-form";

import { Colors } from "@/styles/colors";
import { StyledPhotoInput } from "./InputPhoto-styles";
import { CircleBlock, RelativeBlock } from "../../Block";
import { Pen } from "../../Signs";
import { ErrorLabel } from "../../Labels";

interface InputPhotoProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  imageUrl?: string;
  register?: UseFormRegisterReturn<string>;
}
// TODO: Error should to depend files.length
const InputPhoto = ({
  error,
  imageUrl,
  register,
  ...props
}: InputPhotoProps): JSX.Element => (
  <RelativeBlock width="5rem" maxHeight="5rem">
    <CircleBlock width="5rem">
      {imageUrl && <Image src={imageUrl} width={100} height={100} alt="" />}

      <CircleBlock
        bgColor={Colors.LIGHT_GREY}
        width="1.5rem"
        right="0"
        bottom="0"
        isAbsolute
      >
        <StyledPhotoInput
          type="file"
          accept="image/png,image/jpeg"
          {...register}
          {...props}
        />
      </CircleBlock>
      <Pen />
    </CircleBlock>
    {error && <ErrorLabel>{error}</ErrorLabel>}
  </RelativeBlock>
);

export default InputPhoto;
