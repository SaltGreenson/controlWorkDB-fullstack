import React from "react";

const Pencil = ({
  ...props
}: React.BaseHTMLAttributes<HTMLOrSVGElement>): JSX.Element => (
  <svg
    {...props}
    style={{ cursor: "pointer" }}
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_385_222)">
      <path
        d="M3.6665 18.3333H7.33317L16.9582 8.70829C17.4444 8.22206 17.7176 7.56259 17.7176 6.87495C17.7176 6.18732 17.4444 5.52785 16.9582 5.04162C16.4719 4.55539 15.8125 4.28223 15.1248 4.28223C14.4372 4.28223 13.7777 4.55539 13.2915 5.04162L3.6665 14.6666V18.3333Z"
        stroke="#9C9C9C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.375 5.95825L16.0417 9.62492"
        stroke="#9C9C9C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_385_222">
        <rect width="22" height="22" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default Pencil;
