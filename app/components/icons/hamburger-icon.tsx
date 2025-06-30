import React from "react";

const HamburgerIcon = ({
  color = "currentColor",
  className,
  width = 24,
  height = 24,
}: {
  color?: string;
  className?: string;
  width?: number | string;
  height?: number | string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12h18" />
      <path d="M3 6h18" />
      <path d="M3 18h18" />
    </svg>
  );
};

export default HamburgerIcon;
