import React from "react";
import { instance } from "@/api";

const RelatedContent = () => {
  return <div></div>;
};

export default RelatedContent;

export async function getStaticProps() {
  const response = await instance.get("related/elements/");
  const data = response.data;
  return {
    props: { data },
  };
}
