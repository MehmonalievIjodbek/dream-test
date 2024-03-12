import React from "react";

interface IconType {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const CloseIcon: React.FC<IconType> = ({
  width = 30,
  height = 30,
  color = "#0F0F0F",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        d="M20.746 3.329a1 1 0 00-1.415 0l-7.294 7.294-7.294-7.294a1 1 0 10-1.414 1.414l7.294 7.294-7.294 7.294a1 1 0 001.414 1.415l7.294-7.295 7.294 7.295a1 1 0 001.415-1.415l-7.295-7.294 7.295-7.294a1 1 0 000-1.414z"
      ></path>
    </svg>
  );
};

export default CloseIcon;
