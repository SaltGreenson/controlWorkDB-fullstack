import { CustomBlock, FlexBlock } from "@/components/common/Block";
import CustomButton from "@/components/common/CustomButton";
import { CustomInput } from "@/components/common/Inputs";
import { Table, TD, TH, TR } from "@/components/common/Table/Table";
import PopUp from "@/components/elements/PopUp";
import { StyledFormContainer } from "@/pagesContent/Main/main-styles";
import { IMainWithRelatable } from "@/types/main.types";
import React, { useState } from "react";

interface MainContentType {
  elements: IMainWithRelatable[];
}

const MainContent = ({ elements }: MainContentType) => {
  const [selectedElement, setSelectedElement] = useState(elements[0]);
  const [isActivePopUp, setIsActivePopUp] = useState(false);
  const handleOnClick = (element: IMainWithRelatable) => () => {
    setSelectedElement(element);
  };

  const handleDoubleClick = () => () => {
    setIsActivePopUp(true);
  };

  return (
    <>
      <Table>
        <TR>
          <TH>first name</TH>
          <TH>last name</TH>
          <TH>email</TH>
          <TH>gender</TH>
          <TH>job</TH>
          <TH>salary</TH>
        </TR>
        {elements &&
          elements.map((el) => (
            <TR
              key={el.id}
              onClick={handleOnClick(el)}
              onDoubleClick={handleDoubleClick()}
            >
              <TD>{el.first_name}</TD>
              <TD>{el.last_name}</TD>
              <TD>{el.email}</TD>
              <TD>{el.gender}</TD>
              <TD>{el.job_title}</TD>
              <TD>{el.salary}</TD>
            </TR>
          ))}
      </Table>
      {isActivePopUp && (
        <PopUp setActive={setIsActivePopUp}>
          <StyledFormContainer>
            <FlexBlock gap="20px" maxWidth="500px" direction="column">
              <FlexBlock gap="10px">
                <CustomInput
                  label="First name"
                  width="245px"
                  defaultValue={selectedElement.first_name}
                />
                <CustomInput
                  label="Last name"
                  width="245px"
                  defaultValue={selectedElement.last_name}
                />
              </FlexBlock>
              <CustomBlock width="100%">
                <CustomInput
                  width="100%"
                  label="email"
                  defaultValue={selectedElement.email}
                />
              </CustomBlock>
              <FlexBlock gap="10px">
                <CustomInput
                  label="gender"
                  defaultValue={selectedElement.gender}
                />
                <CustomInput
                  label="Job"
                  defaultValue={selectedElement.job_title}
                />
                <CustomInput
                  label="Salary"
                  defaultValue={selectedElement.salary}
                />
              </FlexBlock>
              <FlexBlock justify="flex-end" gap="10px">
                <CustomButton variant="primary">Сохранить</CustomButton>
                <CustomButton variant="secondary">Удалить</CustomButton>
              </FlexBlock>
            </FlexBlock>
          </StyledFormContainer>
        </PopUp>
      )}
    </>
  );
};

export default MainContent;
