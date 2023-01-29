import React from "react";

import { Colors } from "@/styles/colors";
import { PenStyles } from "./Pen-styles";

const Pen = () => (
  <PenStyles>
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.99976 11.9997H-0.000244141V8.99974L6.77113 2.22836C6.77122 2.22845 6.7713 2.22853 6.77139 2.22861L9.77113 5.22836L2.99976 11.9997ZM10.4782 4.52125L10.8748 4.12474C11.2726 3.72691 11.4961 3.18735 11.4961 2.62474C11.4961 2.06213 11.2726 1.52256 10.8748 1.12474C10.4769 0.726914 9.93736 0.503418 9.37476 0.503418C8.81215 0.503418 8.27258 0.726914 7.87476 1.12474L7.47824 1.52125C7.47832 1.52134 7.47841 1.52142 7.47849 1.52151L10.4782 4.52125Z"
        fill={Colors.BLUE}
      />
    </svg>
  </PenStyles>
);

export default Pen;
