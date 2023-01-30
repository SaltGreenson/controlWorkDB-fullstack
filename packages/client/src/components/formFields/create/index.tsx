import { CustomBlock, FlexBlock } from "@/components/common/Block";
import { CustomInput } from "@/components/common/Inputs";
import { IMain } from "@/types/main.types";
import React from "react";

interface CreateProps {
  isCreate?: boolean;
  selectedElement: IMain;
  hasDefaultValues?: boolean;
}

const CreateFormFields = ({
  isCreate,
  selectedElement,
  hasDefaultValues,
}: CreateProps): JSX.Element => {
  return (
    <FlexBlock gap="20px" maxWidth="500px" direction="column">
      <FlexBlock gap="10px">
        <CustomInput
          name={isCreate ? "create_first_name" : "first_name"}
          label="First name"
          width="245px"
          defaultValue={hasDefaultValues ? selectedElement.first_name : ""}
        />
        <CustomInput
          name={isCreate ? "create_last_name" : "last_name"}
          label="Last name"
          width="245px"
          defaultValue={hasDefaultValues ? selectedElement.last_name : ""}
        />
      </FlexBlock>
      <CustomBlock width="100%">
        <CustomInput
          name={isCreate ? "create_email" : "email"}
          width="100%"
          label="email"
          defaultValue={hasDefaultValues ? selectedElement.email : ""}
        />
      </CustomBlock>
      <FlexBlock gap="10px">
        <CustomInput
          name={isCreate ? "create_gender" : "gender"}
          label="gender"
          defaultValue={hasDefaultValues ? selectedElement.gender : ""}
        />
        <CustomInput
          name={isCreate ? "create_job_title" : "job_title"}
          label="Job"
          defaultValue={hasDefaultValues ? selectedElement.job : ""}
        />
        <CustomInput
          name={isCreate ? "create_salary" : "salary"}
          label="Salary"
          defaultValue={hasDefaultValues ? selectedElement.salary : ""}
        />
      </FlexBlock>
    </FlexBlock>
  );
};

export default CreateFormFields;
