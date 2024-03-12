import React from "react";

interface IconType {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const FilterIcon: React.FC<IconType> = ({
  width = 32,
  height = 32,
  color = "#33363F",
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
        stroke={color}
        strokeLinecap="round"
        strokeWidth="2"
        d="M12 7h8M4 7h4M17 17h3M4 17h8"
      ></path>
      <circle
        cx="10"
        cy="7"
        r="2"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="2"
        transform="rotate(90 10 7)"
      ></circle>
      <circle
        cx="15"
        cy="17"
        r="2"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="2"
        transform="rotate(90 15 17)"
      ></circle>
    </svg>
  );
};

export default FilterIcon;
