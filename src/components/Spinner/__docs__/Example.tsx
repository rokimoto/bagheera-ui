import React, { FC } from "react";
import Spinner from "../Spinner";
import { SpinnerProps } from "../Spinner.d";

const Example: FC<SpinnerProps> = ({
  type = 'default',
  size = "small",
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
      <Spinner
        size={size}
        type={type}
      />
    </div>
  );
};

export default Example;