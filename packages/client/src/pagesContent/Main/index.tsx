import { instance } from "@/api";
import { CustomBlock, FlexBlock } from "@/components/common/Block";
import CustomButton from "@/components/common/CustomButton";
import { CustomInput, InputSearch } from "@/components/common/Inputs";
import { Table, TD, TH, TR } from "@/components/common/Table/Table";
import PopUp from "@/components/elements/PopUp";
import { StyledFormContainer } from "@/pagesContent/Main/main-styles";
import { IMainWithRelatable } from "@/types/main.types";
import React, { FormEvent, useCallback, useState } from "react";

interface MainContentType {
  elements: IMainWithRelatable[];
}

const MainContent = ({ elements }: MainContentType) => {
  const [data, setData] = useState(elements);
  const [selectedElement, setSelectedElement] = useState(data[0]);
  const [isActivePopUp, setIsActivePopUp] = useState(false);

  const handleOnClick = useCallback(
    (element: IMainWithRelatable) => () => {
      setSelectedElement(element);
    },
    [setSelectedElement]
  );

  const handleDoubleClick = useCallback(
    () => () => {
      setIsActivePopUp(true);
    },
    [setIsActivePopUp]
  );

  const updateHandleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      await instance.put(`main/element?id=${selectedElement.id}`, {
        id: event.currentTarget?.person_id.value,
        firstName: event.currentTarget?.first_name.value,
        lastName: event.currentTarget?.last_name.value,
        email: event.currentTarget?.email.value,
        gender: event.currentTarget?.gender.value,
      });
      const response = await instance.get("main/elements");
      setData(response.data);
      setIsActivePopUp(false);
      document.body.style.overflow = "auto";
    },
    []
  );

  const createHandleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      await instance.post(`main/element`, {
        firstName: event.currentTarget?.create_first_name.value,
        lastName: event.currentTarget?.create_last_name.value,
        email: event.currentTarget?.create_email.value,
        gender: event.currentTarget?.create_gender.value,
      });
      const response = await instance.get("main/elements");
      setData(response.data);
      setIsActivePopUp(false);
      document.body.style.overflow = "auto";
    },
    []
  );

  const deleteHandleSubmit = useCallback(
    () => async () => {
      console.log("here");
      await instance.delete(`main/element?id=${selectedElement.id}`);
      const response = await instance.get("main/elements");
      setData(response.data);
      setIsActivePopUp(false);
      document.body.style.overflow = "auto";
    },
    []
  );

  const searchHandleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      const params = event.currentTarget?.params.value;
      let response;
      if (!params) {
        response = await instance.get(`main/elements`);
      } else {
        response = await instance.get(`main/elements/search?params=${params}`);
      }
      setData(response.data);
    },
    []
  );

  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await searchHandleSubmit(e);
        }}
      >
        <FlexBlock margin="20px 0" gap="10px" maxWidth="500px">
          <InputSearch name="params" variant="large" />
          <CustomButton variant="primary" size="medium">
            Найти
          </CustomButton>
        </FlexBlock>
      </form>

      <Table>
        <TR>
          <TH>first name</TH>
          <TH>last name</TH>
          <TH>email</TH>
          <TH>gender</TH>
          <TH>job</TH>
          <TH>salary</TH>
        </TR>
        {data &&
          data.map((el) => (
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
      <form
        onSubmit={async (e) => {
          await createHandleSubmit(e);
        }}
      >
        <FlexBlock gap="10px" margin="50px 0 0 0">
          <CustomInput
            name="create_first_name"
            label="First name"
            width="245px"
          />
          <CustomInput
            name="create_last_name"
            label="Last name"
            width="245px"
          />
          <CustomInput name="create_email" label="Email" width="245px" />
          <CustomInput name="create_gender" label="Gender" width="245px" />
        </FlexBlock>
        <CustomBlock margin="20px 0 0 0">
          <CustomButton name="save" variant="primary" type="submit">
            Создать
          </CustomButton>
        </CustomBlock>
      </form>
      {isActivePopUp && (
        <PopUp setActive={setIsActivePopUp}>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              await updateHandleSubmit(e);
            }}
          >
            <input type="hidden" name="person_id" value={selectedElement.id} />
            <StyledFormContainer>
              <FlexBlock gap="20px" maxWidth="500px" direction="column">
                <FlexBlock gap="10px">
                  <CustomInput
                    name="first_name"
                    label="First name"
                    width="245px"
                    defaultValue={selectedElement.first_name}
                  />
                  <CustomInput
                    name="last_name"
                    label="Last name"
                    width="245px"
                    defaultValue={selectedElement.last_name}
                  />
                </FlexBlock>
                <CustomBlock width="100%">
                  <CustomInput
                    name="email"
                    width="100%"
                    label="email"
                    defaultValue={selectedElement.email}
                  />
                </CustomBlock>
                <FlexBlock gap="10px">
                  <CustomInput
                    name="gender"
                    label="gender"
                    defaultValue={selectedElement.gender}
                  />
                  <CustomInput
                    name="job_title"
                    label="Job"
                    defaultValue={selectedElement.job_title}
                  />
                  <CustomInput
                    name="salary"
                    label="Salary"
                    defaultValue={selectedElement.salary}
                  />
                </FlexBlock>
                <FlexBlock justify="flex-end" gap="10px">
                  <CustomButton name="save" variant="primary" type="submit">
                    Сохранить
                  </CustomButton>
                  <CustomButton
                    name="delete"
                    variant="secondary"
                    type="button"
                    onClick={(e) => {
                      deleteHandleSubmit()();
                      e.preventDefault();
                    }}
                  >
                    Удалить
                  </CustomButton>
                </FlexBlock>
              </FlexBlock>
            </StyledFormContainer>
          </form>
        </PopUp>
      )}
    </>
  );
};

export default MainContent;
