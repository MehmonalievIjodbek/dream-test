import React from "react";

interface IconType {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const MenuRightIcon: React.FC<IconType> = ({
  width = 32,
  height = 32,
  color = "#000",
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
        d="M4 6a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zM4 18a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zM11 11a1 1 0 100 2h8a1 1 0 100-2h-8z"
      ></path>
    </svg>
  );
};

export default MenuRightIcon;
