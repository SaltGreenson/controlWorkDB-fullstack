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
        region: event.currentTarget?.create_region.value,
        capital: event.currentTarget?.create_capital.value,
        square: event.currentTarget?.create_square.value,
        population: event.currentTarget?.create_population.value,
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
