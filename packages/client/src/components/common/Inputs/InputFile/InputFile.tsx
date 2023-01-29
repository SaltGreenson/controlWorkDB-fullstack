import { IPhotoGallery } from "@/types/catalog.types";
import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { CustomBlock, RelativeBlock } from "../../Block";
import CustomButton from "../../CustomButton";
import CustomImage from "../../Img";
import { CustomLabel, ErrorLabel } from "../../Labels";

import { PhotoContainer, StyledInputFile } from "./InputFile-styles";

interface InputFileProps extends React.InputHTMLAttributes<HTMLInputElement> {
  acceptsPhotos?: boolean;
  error?: string;
  isInPopUp?: boolean;
  label: string;
  marginContainer?: ".5rem 0 0 0" | "0 0 0 .5rem" | string;
  photoGallery?: Array<IPhotoGallery>;
  register?: UseFormRegisterReturn<string>;
}

const InputFile = ({
  acceptsPhotos,
  error,
  isInPopUp,
  label,
  marginContainer,
  photoGallery,
  register,
  ...props
}: InputFileProps): JSX.Element => (
  <CustomBlock margin={marginContainer}>
    <CustomLabel error={error}>
      {label}

      <CustomBlock>
        {photoGallery && (
          <PhotoContainer>
            {photoGallery.map((photo) => (
              <CustomImage
                key={photo.id}
                width="120px"
                height="120px"
                src={photo.url}
                isInPopUp={isInPopUp}
                needDisplay
              />
            ))}
          </PhotoContainer>
        )}
        <RelativeBlock>
          <CustomButton variant="text">+ Add</CustomButton>
          <StyledInputFile
            type={"file"}
            accept={acceptsPhotos ? "image/png, image/jpeg" : "application/pdf"}
            {...register}
            {...props}
          />
        </RelativeBlock>
      </CustomBlock>

      {error && <ErrorLabel>{error}</ErrorLabel>}
    </CustomLabel>
  </CustomBlock>
);

export default InputFile;
