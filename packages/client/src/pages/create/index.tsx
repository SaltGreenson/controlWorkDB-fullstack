import Preloader from "@/components/common/Preloader";
import MainLayout from "@/components/layouts/Main";
import dynamic from "next/dynamic";
import React from "react";

const DynamicCreateContent = dynamic(
  () => import("../../pagesContent/Create"),
  {
    loading: Preloader,
  }
);

const Index = () => {
  return (
    <MainLayout activeTab={1}>
      <DynamicCreateContent />
    </MainLayout>
  );
};
export default Index;
