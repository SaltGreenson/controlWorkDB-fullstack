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
const Index = ({ initialData, defaultValues }: IReportProps): JSX.Element => {
  return (
    <MainLayout activeTab={2}>
      <DynamicReportContent
        initialData={initialData}
        defaultValues={defaultValues}
      />
    </MainLayout>
  );
};

export default Index;

export async function getStaticProps() {
  const defaultQuery = "Ми";
  const defaultFrom = "1100";
  const defaultTo = "1225";
  const responseMax = await instance.get("main/max-element");
  const responseMin = await instance.get("main/min-element");
  const responseBetween = await instance.get(
    `main/between-element?from=${defaultFrom}&to=${defaultTo}`
  );
  const responseParams = await instance.get("main/elements/search?params=Ми");
  const responseCountLess = await instance.get("main/avg-count");
  const responseRegionsLess = await instance.get("main/avg-elements");
  const responseMaxSquare = await instance.get("main/max-square");
  const responseAvgPop = await instance.get("main/avg-population");
  return {
    props: {
      initialData: {
        withParams: responseParams.data,
        minElement: responseMin.data,
        maxElement: responseMax.data,
        betweenElements: responseBetween.data,
        regionsLessThatAvg: responseRegionsLess.data,
        countRegionsLessThatAvg: responseCountLess.data,
        avgPopulation: responseAvgPop.data,
        maxSquare: responseMaxSquare.data,
      },
      defaultValues: {
        defaultQuery,
        defaultFrom,
        defaultTo,
      },
    },
  };
}
