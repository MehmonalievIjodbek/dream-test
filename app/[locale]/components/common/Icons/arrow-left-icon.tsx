import React from "react";

interface IconType {
  width?: number | string;
  height?: number | string;
}

const ArrowLeftIcon: React.FC<IconType> = ({ width = 24, height = 24 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
    >
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h32v32H0z"></path>
        <path
          fill="#000"
          d="M9.485 7.486L10.9 8.9 4.8 15h25.443v2H4.814l6.085 6.085L9.485 24.5 1 16.014l.022-.021L1 15.97z"
        ></path>
      </g>
    </svg>
  );
};

export default ArrowLeftIcon;
