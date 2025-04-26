import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
  shadow?: "none" | "sm" | "md" | "lg";
  border?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  padding = "md",
  shadow = "md",
  border = false,
  onClick,
}) => {
  const paddingClasses = {
    none: "p-0",
    sm: "p-3",
    md: "p-4",
    lg: "p-6",
  };

  const shadowClasses = {
    none: "",
    sm: "shadow-sm",
    md: "shadow",
    lg: "shadow-lg",
  };

  const borderClass = border ? "border border-neutral-200" : "";
  const cursorClass = onClick
    ? "cursor-pointer hover:bg-neutral-50 transition-colors"
    : "";

  const cardClasses = `
    bg-white 
    rounded-lg 
    ${paddingClasses[padding]} 
    ${shadowClasses[shadow]} 
    ${borderClass} 
    ${cursorClass} 
    ${className}
  `;

  return (
    <div className={cardClasses} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
