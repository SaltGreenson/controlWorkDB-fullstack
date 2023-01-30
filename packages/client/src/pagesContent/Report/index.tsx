import { FlexBlock } from "@/components/common/Block";
import Paragraph from "@/components/common/Paragraph";
import { Table, TD, TH, TR } from "@/components/common/Table/Table";
import Title from "@/components/common/Title";
import { ReportContainer } from "@/pagesContent/Report/report-styles";
import { IMain } from "@/types/main.types";
import React from "react";

export interface IReportProps {
  betweenElements: IMain[];
  minElement: IMain;
  maxElement: IMain;
  withParams: IMain[];
  countRegionsLessThatAvg: { count: string };
  regionsLessThatAvg: IMain[];
  avgPopulation: { avg: string };
  maxSquare: IMain;
}

const ReportContent = ({
  betweenElements,
  maxElement,
  minElement,
  withParams,
  regionsLessThatAvg,
  countRegionsLessThatAvg,
  avgPopulation,
  maxSquare,
}: IReportProps): JSX.Element => {
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
          {displayTableElement(minElement)}
        </FlexBlock>

        <FlexBlock gap="15px" direction="column">
          <Paragraph variant="medium">С максимальной площадью</Paragraph>
          {displayTableElement(maxElement)}
        </FlexBlock>

        <FlexBlock gap="15px" direction="column">
          <Paragraph variant="medium">Население между интервалом</Paragraph>
          {displayTableElements(betweenElements)}
        </FlexBlock>

        <FlexBlock gap="15px" direction="column">
          <Paragraph variant="medium">С параметрами</Paragraph>
          {displayTableElements(withParams)}
        </FlexBlock>

        <FlexBlock gap="15px" direction="column">
          <Paragraph variant="medium">
            Регионы у которых площадь меньше средней
          </Paragraph>
          <FlexBlock>
            <Paragraph variant="medium">
              Количество регионов: {countRegionsLessThatAvg.count}
            </Paragraph>
          </FlexBlock>
          {displayTableElements(regionsLessThatAvg)}
        </FlexBlock>

        <FlexBlock gap="15px" direction="column">
          <Paragraph variant="medium">Максимальная площадь</Paragraph>
          {displayTableElement(maxSquare)}
        </FlexBlock>

        <FlexBlock gap="15px" direction="column">
          <Paragraph variant="medium">
            Среднее количество населения: {avgPopulation.avg}
          </Paragraph>
        </FlexBlock>
      </FlexBlock>
    </ReportContainer>
  );
};

export default ReportContent;
