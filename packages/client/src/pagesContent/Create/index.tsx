import { instance } from "@/api";
import { CustomBlock, FlexBlock } from "@/components/common/Block";
import CustomButton from "@/components/common/CustomButton";
import CreateFormFields from "@/components/formFields/create";
import { IMain } from "@/types/main.types";
import { useRouter } from "next/router";
import React, { FormEvent, useCallback } from "react";

const CreateContent = () => {
  const router = useRouter();

  const createHandleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      await instance.post(`main/element`, {
        firstName: event.currentTarget?.create_first_name.value,
        lastName: event.currentTarget?.create_last_name.value,
        email: event.currentTarget?.create_email.value,
        gender: event.currentTarget?.create_gender.value,
        job: event.currentTarget?.create_job_title.value,
        salary: event.currentTarget?.create_salary.value,
      });
      await router.push("/");
    },
    []
  );

  return (
    <FlexBlock
      minWidth="100%"
      height="500px"
      direction="column"
      align="center"
      justify="center"
    >
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await createHandleSubmit(e);
        }}
      >
        <CreateFormFields selectedElement={{} as IMain} isCreate />
        <CustomBlock margin="20px 0 0 0">
          <CustomButton name="save" variant="primary" type="submit">
            Создать
          </CustomButton>
        </CustomBlock>
      </form>
    </FlexBlock>
  );
};

export default CreateContent;
