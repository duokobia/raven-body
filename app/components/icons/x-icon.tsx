import React from "react";

const XIcon = ({
  color = "currentColor",
  className,
  width = 24,
  height = 24,
  onClick,
}: {
  color?: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  onClick?: () => void;
}) => {
  return (
    <svg
      onClick={onClick}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      className={`${className ?? ""} cursor-pointer`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
};

export default XIcon;
