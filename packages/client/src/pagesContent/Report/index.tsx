import { instance } from "@/api";
import { FlexBlock } from "@/components/common/Block";
import { InputSearch } from "@/components/common/Inputs";
import { StyledSmallInput } from "@/components/common/Inputs/InputSmall/inputSmall-styles";
import Paragraph from "@/components/common/Paragraph";
import { Table, TD, TH, TR } from "@/components/common/Table/Table";
import Title from "@/components/common/Title";
import { ReportContainer } from "@/pagesContent/Report/report-styles";
import { IMain } from "@/types/main.types";
import React, { useCallback, useState } from "react";

export interface IReportProps {
  initialData: {
    betweenElements: IMain[];
    minElement: IMain;
    maxElement: IMain;
    withParams: IMain[];
    countRegionsLessThatAvg: { count: string };
    regionsLessThatAvg: IMain[];
    avgPopulation: { avg: string };
    maxSquare: IMain;
  };
  defaultValues: {
    defaultQuery: string;
    defaultFrom: string;
    defaultTo: string;
  };
}

const ReportContent = ({
  initialData,
  defaultValues,
}: IReportProps): JSX.Element => {
  const [searchData, setSearchData] = useState(initialData.withParams);
  const [from, setFrom] = useState(defaultValues.defaultFrom);
  const [to, setTo] = useState(defaultValues.defaultTo);
  const [betweenData, setBetweenData] = useState(initialData.withParams);

  const searchHandle = useCallback(async (query: string) => {
    let response;
    if (query) {
      response = await instance.get(`main/elements/search?params=${query}`);
      setSearchData(response.data);
    } else {
      response = await instance.get(
        `main/elements/search?params=${defaultValues.defaultQuery}`
      );
      setSearchData(response.data);
    }
  }, []);

  const fromHandle = useCallback(
    async (value: string) => {
      let response;
      if (value) {
        response = await instance.get(
          `main/between-element?from=${value}&to=${to}`
        );
        setFrom(value);
        setBetweenData(response.data);
      } else {
        response = await instance.get(
          `main/elements/search?params=${defaultValues.defaultQuery}`
        );
        setFrom(defaultValues.defaultFrom);
        setBetweenData(response.data);
      }
    },
    [from]
  );

  const toHandle = useCallback(
    async (value: string) => {
      let response;
      if (value) {
        response = await instance.get(
          `main/between-element?from=${from}&to=${value}`
        );
        setTo(value);
        setBetweenData(response.data);
      } else {
        response = await instance.get(
          `main/elements/search?params=${defaultValues.defaultQuery}`
        );
        setTo(defaultValues.defaultFrom);
        setBetweenData(response.data);
      }
    },
    [from]
  );

  const displayTableElement = (element: IMain) => (
    <Table>
      <TR>
        <TH>Область</TH>
        <TH>Областной центр</TH>
        <TH>Площадь, тыс. км</TH>
        <TH>Население, тыс.</TH>
      </TR>
      <TR key={element.id}>
        <TD>{element.region}</TD>
        <TD>{element.capital}</TD>
        <TD>{element.square}</TD>
        <TD>{element.population}</TD>
      </TR>
    </Table>
  );

  const displayTableElements = (elements: IMain[]) => (
    <Table>
      <TR>
        <TH>Область</TH>
        <TH>Областной центр</TH>
        <TH>Площадь, тыс. км</TH>
        <TH>Население, тыс.</TH>
      </TR>
      {elements &&
        elements.map((el) => (
          <TR key={el.id}>
            <TD>{el.region}</TD>
            <TD>{el.capital}</TD>
            <TD>{el.square}</TD>
            <TD>{el.population}</TD>
          </TR>
        ))}
    </Table>
  );

  return (
    <ReportContainer>
      <FlexBlock width="100%" justify="center">
        <Title type="large">Отчет</Title>
      </FlexBlock>

      <FlexBlock gap="30px" direction="column">
        <FlexBlock gap="15px" direction="column">
          <Paragraph variant="medium">С минимальной площадью</Paragraph>
          {displayTableElement(initialData.minElement)}
        </FlexBlock>

        <FlexBlock gap="15px" direction="column">
          <Paragraph variant="medium">С максимальной площадью</Paragraph>
          {displayTableElement(initialData.maxElement)}
        </FlexBlock>

        <FlexBlock gap="15px" direction="column">
          <FlexBlock gap="10px" align="center">
            <Paragraph variant="medium">Население между интервалом</Paragraph>

            <FlexBlock gap="5px" align="center">
              <Paragraph variant="medium">от:</Paragraph>

              <StyledSmallInput
                defaultValue={defaultValues.defaultFrom}
                onChange={(e) => {
                  fromHandle(e.currentTarget.value);
                }}
              />
            </FlexBlock>
            <FlexBlock gap="5px" align="center">
              <Paragraph variant="medium">до:</Paragraph>
              <StyledSmallInput
                defaultValue={defaultValues.defaultTo}
                onChange={(e) => {
                  toHandle(e.currentTarget.value);
                }}
              />
            </FlexBlock>
          </FlexBlock>

          {displayTableElements(betweenData)}
        </FlexBlock>

        <FlexBlock gap="10px" direction="column">
          <FlexBlock gap="10px" align="center">
            <Paragraph variant="medium">С параметрами</Paragraph>
            <InputSearch
              variant="small"
              defaultValue={defaultValues.defaultQuery}
              onChange={(e) => {
                searchHandle(e.currentTarget.value);
              }}
            />
          </FlexBlock>
          {displayTableElements(searchData)}
        </FlexBlock>

        <FlexBlock gap="10px" direction="column">
          <Paragraph variant="medium">
            Регионы у которых площадь меньше средней
          </Paragraph>
          <FlexBlock>
            <Paragraph variant="medium">
              Количество регионов: {initialData.countRegionsLessThatAvg.count}
            </Paragraph>
          </FlexBlock>
          {displayTableElements(initialData.regionsLessThatAvg)}
        </FlexBlock>

        <FlexBlock width="100%" justify="center">
          <Title type="large">Выводы</Title>
        </FlexBlock>

        <FlexBlock gap="5px" direction="column">
          <Paragraph variant="medium">Максимальная площадь</Paragraph>
          {displayTableElement(initialData.maxSquare)}
        </FlexBlock>

        <FlexBlock gap="5px" direction="column">
          <Paragraph variant="medium">
            Среднее количество населения: {initialData.avgPopulation.avg}
          </Paragraph>
        </FlexBlock>
      </FlexBlock>
    </ReportContainer>
  );
};

export default ReportContent;
