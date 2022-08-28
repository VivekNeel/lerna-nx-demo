import React from "react";

export interface ButtonProps {
  color: string;
  title: string;
  bgcolor?: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { color, title, bgcolor } = props;
  return (
    <button
      style={{
        backgroundColor: color,
      }}
    >
      <span>{title}</span>
    </button>
  );
};
