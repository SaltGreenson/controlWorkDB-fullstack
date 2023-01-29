import Preloader from "@/components/common/Preloader";
import MainLayout from "@/components/layouts/Main";
import dynamic from "next/dynamic";
import React from "react";

const DynamicReportContent = dynamic(
  () => import("../../pagesContent/Report"),
  {
    loading: Preloader,
  }
);

const Index = () => {
  return (
    <MainLayout activeTab={1}>
      <DynamicReportContent />
    </MainLayout>
  );
};

export default Index;
