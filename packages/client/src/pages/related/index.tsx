import Preloader from "@/components/common/Preloader";
import MainLayout from "@/components/layouts/Main";
import dynamic from "next/dynamic";
import React from "react";

const DynamicRelatedContent = dynamic(
  () => import("../../pagesContent/Related"),
  {
    loading: Preloader,
  }
);

const Index = () => {
  return (
    <MainLayout activeTab={1}>
      <DynamicRelatedContent />
    </MainLayout>
  );
};
export default Index;
