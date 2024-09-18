import { useState, useRef } from "react";

import "../styles.css";

const initialErrorState = {
  number: "",
  name: "",
  validThru: "",
  cvv: ""
};

export default function CreditCardForm({ handleChange }) {
  const numberRef = useRef();
  const validThruRef = useRef();

  const [errors, setErrors] = useState(initialErrorState);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (key, value) => {
    handleValidation(key, value);
    handleChange(key, value);
  };

  const handleValidation = (key, value) => {
    switch (key) {
      case "number": {
        if (value && value.length < 16) {
          setErrors({
            ...errors,
            [key]: "Please Enter 16 digits"
          });
        } else {
          setErrors({
            ...errors,
            [key]: ""
          });
        }
        break;
      }
      case "validThru": {
        if (value && !value.includes("/")) {
          setErrors({
            ...errors,
            [key]: "Please Enter Valid thru in mm/yy format"
          });
        } else {
          setErrors({
            ...errors,
            [key]: ""
          });
        }
        break;
      }
      default: {
      }
    }
  };

  const handleAddSpaces = (e) => {
    const value = e.target.value;
    if (!value) return;
    if (value.length % 4 === 0) {
      numberRef.current.value += " ";
    }
  };

  const handleAddSlash = (e) => {
    const value = e.target.value;
    if (value.length === 2) {
      validThruRef.current.value += "/";
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="form">
      <input
        type="text"
        placeholder="Card Number"
        onChange={(e) => {
          handleAddSpaces(e);
          handleInputChange("number", e.target.value);
        }}
        ref={numberRef}
      />
      {errors["number"] && <p>{errors["number"]}</p>}
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => handleInputChange("name", e.target.value)}
      />
      <input
        type="text"
        placeholder="Valid Thru"
        onChange={(e) => {
          handleAddSlash(e);
          handleInputChange("validThru", e.target.value);
        }}
        ref={validThruRef}
      />
      {errors["validThru"] && <p>{errors["validThru"]}</p>}
      <input
        type="password"
        placeholder="CVC"
        onChange={(e) => handleInputChange("cvv", e.target.value)}
      />
    </form>
  );
}
