import Preloader from "@/components/common/Preloader";
import MainLayout from "@/components/layouts/Main";
import dynamic from "next/dynamic";
import React from "react";

const DynamicViewContent = dynamic(() => import("../../pagesContent/View"), {
  loading: Preloader,
});

const Index = () => {
  return (
    <MainLayout activeTab={2}>
      <DynamicViewContent />
    </MainLayout>
  );
};
export default Index;
