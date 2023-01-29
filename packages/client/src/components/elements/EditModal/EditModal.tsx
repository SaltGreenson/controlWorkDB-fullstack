import CustomButton from "@/components/common/CustomButton";
import Title from "@/components/common/Title";
import React, { FormEventHandler, ReactNode, useCallback } from "react";

import {
  ButtonContainer,
  Closer,
  CloserContainer,
  DescriptionContainer,
  DescriptionTitleContainer,
  StyledEditingContainer,
  StyledHeadContainer,
  TitleContainer,
} from "./EditModal-styles";

type PropsTypes = {
  buttonTitle?: string;
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
  setActive: (value: boolean) => void;
  subTitle: string;
  title: string;
};

const EditModalWindow = ({
  buttonTitle,
  children,
  onSubmit,
  setActive,
  subTitle,
  title,
}: PropsTypes): JSX.Element => {
  const onClickHandler = useCallback(
    (value: boolean) => () => {
      setActive(value);
    },
    [setActive]
  );

  return (
    <form onSubmit={onSubmit}>
      <StyledEditingContainer>
        <StyledHeadContainer>
          <TitleContainer>
            <Title type="thin">{title}</Title>
          </TitleContainer>

          <CloserContainer>
            <Closer onClick={onClickHandler(false)} />
          </CloserContainer>
        </StyledHeadContainer>

        <DescriptionContainer>
          <DescriptionTitleContainer>
            <Title type="thin">{subTitle}</Title>
          </DescriptionTitleContainer>

          {children}
        </DescriptionContainer>

        <ButtonContainer>
          <CustomButton variant="primary" type="submit">
            {buttonTitle ?? "Save"}
          </CustomButton>
        </ButtonContainer>
      </StyledEditingContainer>
    </form>
  );
};

export default EditModalWindow;
