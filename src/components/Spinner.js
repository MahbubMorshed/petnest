import React from "react";
import { Triangle } from "react-loader-spinner";

const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Triangle
        type="Circles"
        color="#00BFFF"
        height={100}
        width={100}
        className="m-5"
      />

      <p className="text-lg text-center px-2">{message}</p>
    </div>
  );
};

export default Spinner;
