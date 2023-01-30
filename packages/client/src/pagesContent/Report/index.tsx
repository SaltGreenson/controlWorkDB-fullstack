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
}

const ReportContent = ({
  betweenElements,
  maxElement,
  minElement,
  withParams,
}: IReportProps): JSX.Element => {
  const displayTableElement = (element: IMain) => (
    <Table>
      <TR>
        <TH>first name</TH>
        <TH>last name</TH>
        <TH>email</TH>
        <TH>gender</TH>
        <TH>job</TH>
        <TH>salary</TH>
      </TR>

      <TR key={element.id}>
        <TD>{element.first_name}</TD>
        <TD>{element.last_name}</TD>
        <TD>{element.email}</TD>
        <TD>{element.gender}</TD>
        <TD>{element.job}</TD>
        <TD>{element.salary}</TD>
      </TR>
    </Table>
  );

  const displayTableElements = (elements: IMain[]) => (
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
          <TR key={el.id}>
            <TD>{el.first_name}</TD>
            <TD>{el.last_name}</TD>
            <TD>{el.email}</TD>
            <TD>{el.gender}</TD>
            <TD>{el.job}</TD>
            <TD>{el.salary}</TD>
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
          <Paragraph variant="medium">С минимальной зарплатой</Paragraph>
          {displayTableElement(minElement)}
        </FlexBlock>

        <FlexBlock gap="15px" direction="column">
          <Paragraph variant="medium">С максимальной зарплатой</Paragraph>
          {displayTableElement(maxElement)}
        </FlexBlock>

        <FlexBlock gap="15px" direction="column">
          <Paragraph variant="medium">Зарплата между интервалом</Paragraph>
          {displayTableElements(betweenElements)}
        </FlexBlock>

        <FlexBlock gap="15px" direction="column">
          <Paragraph variant="medium">С параметрами</Paragraph>
          {displayTableElements(withParams)}
        </FlexBlock>
      </FlexBlock>
    </ReportContainer>
  );
};

export default ReportContent;
