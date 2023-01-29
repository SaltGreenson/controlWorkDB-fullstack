import { instance } from "@/api";
import Preloader from "@/components/common/Preloader";
import MainLayout from "@/components/layouts/Main";
import dynamic from "next/dynamic";
import React from "react";

const DynamicMainContent = dynamic(() => import("../pagesContent/Main"), {
  loading: Preloader,
});

const Home = ({ data }: any) => {
  return (
    <MainLayout activeTab={0}>
      <DynamicMainContent elements={data} />
    </MainLayout>
  );
};

export default Home;

export async function getStaticProps() {
  const response = await instance.get("main/elements");
  const data = response.data;
  return {
    props: { data },
  };
}
