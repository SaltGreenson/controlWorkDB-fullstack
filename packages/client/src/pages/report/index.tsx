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
  regionsLessThatAvg,
  countRegionsLessThatAvg,
  maxSquare,
  avgPopulation,
}: IReportProps): JSX.Element => {
  return (
    <MainLayout activeTab={2}>
      <DynamicReportContent
        withParams={withParams}
        minElement={minElement}
        maxElement={maxElement}
        betweenElements={betweenElements}
        regionsLessThatAvg={regionsLessThatAvg}
        countRegionsLessThatAvg={countRegionsLessThatAvg}
        maxSquare={maxSquare}
        avgPopulation={avgPopulation}
      />
    </MainLayout>
  );
};

export default Index;

export async function getStaticProps() {
  const responseMax = await instance.get("main/max-element");
  const responseMin = await instance.get("main/min-element");
  const responseBetween = await instance.get(
    "main/between-element?from=1100&to=1500"
  );
  const responseParams = await instance.get("main/elements/search?params=Ми");
  const responseCountLess = await instance.get("main/avg-count");
  const responseRegionsLess = await instance.get("main/avg-elements");
  const responseMaxSquare = await instance.get("main/max-square");
  const responseAvgPop = await instance.get("main/avg-population");
  return {
    props: {
      withParams: responseParams.data,
      minElement: responseMin.data,
      maxElement: responseMax.data,
      betweenElements: responseBetween.data,
      regionsLessThatAvg: responseRegionsLess.data,
      countRegionsLessThatAvg: responseCountLess.data,
      avgPopulation: responseAvgPop.data,
      maxSquare: responseMaxSquare.data,
    },
  };
}
