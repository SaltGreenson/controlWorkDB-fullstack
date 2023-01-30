import { instance } from "@/api";
import Preloader from "@/components/common/Preloader";
import MainLayout from "@/components/layouts/Main";
import { IReportProps } from "@/pagesContent/Report";
import dynamic from "next/dynamic";
import React from "react";

const DynamicReportContent = dynamic(
  () => import("../../pagesContent/Report"),
  {
    loading: Preloader,
  }
);
const Index = ({
  withParams,
  minElement,
  maxElement,
  betweenElements,
}: IReportProps): JSX.Element => {
  return (
    <MainLayout activeTab={3}>
      <DynamicReportContent
        withParams={withParams}
        minElement={minElement}
        maxElement={maxElement}
        betweenElements={betweenElements}
      />
    </MainLayout>
  );
};

export default Index;

export async function getStaticProps() {
  const responseMax = await instance.get("main/max-element");
  const responseMin = await instance.get("main/min-element");
  const responseBetween = await instance.get(
    "main/between-element?from=1000&to=1500"
  );
  const responseParams = await instance.get(
    "main/elements/search?params=Develop"
  );
  return {
    props: {
      withParams: responseParams.data,
      minElement: responseMin.data,
      maxElement: responseMax.data,
      betweenElements: responseBetween.data,
    },
  };
}
