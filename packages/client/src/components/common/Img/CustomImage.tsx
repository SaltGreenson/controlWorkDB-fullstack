import React, { useCallback, useState } from "react";

import { sizeConfig } from "@/components/common/Img/config";
import { StyledImage, StyledImageContainer } from "./customImg-styles";
import PopUp from "@/components/elements/PopUp";

interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  height?: "120px" | string;
  isInPopUp?: boolean;
  needDisplay?: boolean;
  size?: "small" | "medium";
  src?: string;
  width?: "120px" | string;
}

const CustomImage = ({
  height,
  needDisplay,
  size,
  width,
  ...imageProps
}: ImgProps): JSX.Element => {
  const [isActivePopUp, setIsActivePopUp] = useState<boolean>(false);
  const onClickHandler = useCallback(
    (value: boolean) => () => {
      needDisplay && setIsActivePopUp(value);
    },
    [needDisplay]
  );

  return (
    <>
      <StyledImageContainer
        needDisplay={needDisplay}
        width={width ?? sizeConfig[size ?? "medium"].width}
        height={height ?? sizeConfig[size ?? "medium"].height}
        onClick={onClickHandler(true)}
      >
        <StyledImage {...imageProps} />
      </StyledImageContainer>

      {needDisplay && isActivePopUp && (
        <PopUp setActive={setIsActivePopUp}>
          <StyledImage {...imageProps} />
        </PopUp>
      )}
    </>
  );
};

export default CustomImage;
