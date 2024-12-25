import React from "react";
import "./FormOptions.css";
import Button from "../Button/Button";

const FormOptions = ({ options }) => {
  return (
    <div className="form-options">
      {options.map(({ imgSrc, text }, index) => (
        <Button key={index} imgSrc={imgSrc} text={text} />
      ))}
    </div>
  );
};

export default FormOptions;
