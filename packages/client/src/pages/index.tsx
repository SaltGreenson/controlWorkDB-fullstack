import Preloader from "@/components/common/Preloader";
import MainLayout from "@/components/layouts/Main";
import dynamic from "next/dynamic";
import React from "react";

const DynamicMainContent = dynamic(() => import("../pagesContent/Main"), {
  loading: Preloader,
});

const Home = () => {
  return (
    <MainLayout activeTab={0}>
      <DynamicMainContent />
    </MainLayout>
  );
};

export default Home;
