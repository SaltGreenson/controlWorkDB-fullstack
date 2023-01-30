import { instance } from "@/api";
import { FlexBlock } from "@/components/common/Block";
import CustomButton from "@/components/common/CustomButton";
import { InputSearch } from "@/components/common/Inputs";
import LabelValue from "@/components/common/LabelValue";
import { Table, TD, TH, TR } from "@/components/common/Table/Table";
import PopUp from "@/components/elements/PopUp";
import CreateFormFields from "@/components/formFields/create";
import {
  Container,
  StyledCart,
  StyledFormContainer,
  StyledToggle,
} from "@/pagesContent/Main/main-styles";
import { IMain } from "@/types/main.types";
import React, { FormEvent, useCallback, useState } from "react";

interface MainContentType {
  elements: IMain[];
}

const MainContent = ({ elements }: MainContentType) => {
  const [data, setData] = useState(elements);
  const [selectedElement, setSelectedElement] = useState(data[0]);
  const [isActivePopUp, setIsActivePopUp] = useState(false);
  const [isActiveTable, setIsActiveTable] = useState(true);
  const [offset, setOffset] = useState(20);

  const handleOnClick = (element: IMain) => () => {
    setSelectedElement(element);
  };

  const handleDoubleClick = useCallback(
    () => () => {
      setIsActivePopUp(true);
    },
    [setIsActivePopUp]
  );

  const handleOnClickToggle = useCallback(
    (value: boolean) => () => {
      setIsActiveTable(value);
    },
    [setIsActiveTable]
  );

  const loadMore = () => async () => {
    const response = await instance.get(`main/elements?offset=${offset}`);
    setData((prev) => [...prev, ...response.data]);
    setOffset((prev) => prev + 20);
  };

  const updateHandleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      await instance.put(`main/element`, {
        id: event.currentTarget?.region_id.value,
        region: event.currentTarget?.region.value,
        capital: event.currentTarget?.capital.value,
        square: event.currentTarget?.square.value,
        population: event.currentTarget?.population.value,
      });
      const response = await instance.get("main/elements");
      setData(response.data);
      setIsActivePopUp(false);
      document.body.style.overflow = "auto";
    },
    []
  );

  const deleteHandleSubmit = useCallback(async () => {
    await instance.delete(`main/element?id=${selectedElement.id}`);
    const response = await instance.get("main/elements");
    setData(response.data);
    setIsActivePopUp(false);
    document.body.style.overflow = "auto";
  }, [selectedElement]);

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

  const displayTableElements = () => (
    <Table>
      <TR>
        <TH>Область</TH>
        <TH>Областной центр</TH>
        <TH>Площадь, тыс. км</TH>
        <TH>Население, тыс.</TH>
      </TR>
      {data &&
        data.map((el) => (
          <TR
            key={el.id}
            onClick={handleOnClick(el)}
            onDoubleClick={handleDoubleClick()}
          >
            <TD>{el.region}</TD>
            <TD>{el.capital}</TD>
            <TD>{el.square}</TD>
            <TD>{el.population}</TD>
          </TR>
        ))}
    </Table>
  );

  const displayCards = () => {
    return (
      data &&
      data.map((el) => (
        <StyledCart
          key={el.id}
          onClick={handleOnClick(el)}
          onDoubleClick={handleDoubleClick()}
        >
          <LabelValue
            label="Область"
            value={el.region}
            isBoldLabel
            isBoldValue
          />
          <LabelValue
            label="Областной центр"
            value={el.capital}
            isBoldLabel
            isBoldValue
          />
          <LabelValue
            label="Площадь"
            value={el.square}
            isBoldLabel
            isBoldValue
          />
          <LabelValue
            label="Gender"
            value={el.square}
            isBoldLabel
            isBoldValue
          />
          <LabelValue
            label="Население"
            value={el.population}
            isBoldLabel
            isBoldValue
          />
        </StyledCart>
      ))
    );
  };

  return (
    <>
      <FlexBlock
        gap="50px"
        margin="20px 0"
        align="center"
        justify="space-between"
      >
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await searchHandleSubmit(e);
          }}
        >
          <FlexBlock gap="10px" maxWidth="500px">
            <InputSearch name="params" variant="large" />
            <CustomButton variant="primary" size="medium">
              Найти
            </CustomButton>
          </FlexBlock>
        </form>

        <FlexBlock>
          <StyledToggle
            isActive={isActiveTable}
            onClick={handleOnClickToggle(true)}
          >
            <CustomButton variant="text">Табличный</CustomButton>
          </StyledToggle>
          <StyledToggle
            isActive={!isActiveTable}
            onClick={handleOnClickToggle(false)}
          >
            <CustomButton variant="text">Карточный</CustomButton>
          </StyledToggle>
        </FlexBlock>
      </FlexBlock>

      <Container>
        {isActiveTable ? displayTableElements() : displayCards()}
      </Container>

      <FlexBlock
        align="center"
        justify="center"
        width="100%"
        margin="20px 0 0 0"
      >
        <CustomButton variant="text" onClick={loadMore()}>
          Показать еще
        </CustomButton>
      </FlexBlock>

      {isActivePopUp && (
        <PopUp setActive={setIsActivePopUp}>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              await updateHandleSubmit(e);
            }}
          >
            <input type="hidden" name="region_id" value={selectedElement.id} />
            <StyledFormContainer>
              <CreateFormFields
                selectedElement={selectedElement}
                hasDefaultValues
              />
              <FlexBlock justify="flex-end" gap="10px">
                <CustomButton name="save" variant="primary" type="submit">
                  Сохранить
                </CustomButton>
                <CustomButton
                  name="delete"
                  variant="secondary"
                  type="button"
                  onClick={async () => {
                    await deleteHandleSubmit();
                  }}
                >
                  Удалить
                </CustomButton>
              </FlexBlock>
            </StyledFormContainer>
          </form>
        </PopUp>
      )}
    </>
  );
};

export default MainContent;
