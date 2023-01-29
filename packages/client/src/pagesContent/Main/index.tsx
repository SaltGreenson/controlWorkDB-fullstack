import { instance } from "@/api";
import React from "react";

const MainContent = () => {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
        </tr>
      </thead>
    </table>
  );
};

export default MainContent;

export async function getStaticProps() {
  const response = await instance.get("main/elements/");
  const data = response.data;
  return {
    props: { data },
  };
}
