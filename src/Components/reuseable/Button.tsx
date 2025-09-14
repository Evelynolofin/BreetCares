import React from "react";

interface ButtonProps {
  title: string;
  borderColor?: string;
  bgColor?: string;
  iconTitle?: any;
  textColor?: string;
  hover?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  borderColor = "transparent",
  bgColor = "transparent",
  iconTitle,
  textColor = "inherit",
  className = "",
}) => {
  return (
    <button
      style={{
        color: `${textColor}`,
        border: `1px solid ${borderColor}`,
        backgroundColor: `${bgColor}`,
      }}
      className={`px-1 py-2 rounded-4xl flex items-center gap-1 ${className}`}
    >
      {iconTitle && <span>{iconTitle}</span>}
      <span className="font-medium">{title}</span>
    </button>
  );
};

export default Button;
