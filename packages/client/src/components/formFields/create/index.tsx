import { FlexBlock } from "@/components/common/Block";
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
          name={isCreate ? "create_region" : "region"}
          label="Область"
          width="245px"
          defaultValue={hasDefaultValues ? selectedElement.region : ""}
        />
        <CustomInput
          name={isCreate ? "create_capital" : "capital"}
          label="Областной центр"
          width="245px"
          defaultValue={hasDefaultValues ? selectedElement.capital : ""}
        />
      </FlexBlock>
      <FlexBlock gap="10px" margin="10px 0 0 0">
        <CustomInput
          name={isCreate ? "create_square" : "square"}
          label="Площадь, тыс"
          width="245px"
          defaultValue={hasDefaultValues ? selectedElement.square : ""}
        />
        <CustomInput
          name={isCreate ? "create_population" : "population"}
          label="Население, тыс"
          width="245px"
          defaultValue={hasDefaultValues ? selectedElement.population : ""}
        />
      </FlexBlock>
    </FlexBlock>
  );
};

export default CreateFormFields;
