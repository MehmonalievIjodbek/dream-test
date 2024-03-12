import React from "react";

interface TypeIcon {
  className?: string;
}

const CheckIcon: React.FC<TypeIcon> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="29"
      fill="none"
      viewBox="0 0 29 29"
      className={className}
    >
      <circle cx="14.5" cy="14.5" r="14.5" fill="#B99A56"></circle>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 15l6.069 5.5L22.5 10"
      ></path>
    </svg>
  );
};

export default CheckIcon;
