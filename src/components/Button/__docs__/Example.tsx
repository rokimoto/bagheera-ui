import React, { FC } from "react";
import Button from "../Button";
import { ButtonProps } from "../Button.d";

const Example: FC<ButtonProps> = ({
  type = 'primary',
  size = "small",
  text = "Button",
  icon,
  disabled = false,
  selected = false,
  loading = false,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Button
        size={size}
        text={text}
        type={type}
        icon={icon}
        disabled={disabled}
        selected={selected}
        loading={loading}
      />
    </div>
  );
};

export default Example;