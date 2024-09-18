import { useState } from "react";

import "./styles.css";
import CreditCardForm from "./components/CreditCardForm";
import CreditCard from "./components/CreditCard";

const initialState = {
  number: "",
  name: "",
  validThru: "",
  cvv: ""
};

export default function App() {
  const [state, setState] = useState(initialState);

  const handleChange = (key, value) => {
    const newState = { ...state };
    newState[key] = value;
    setState(newState);
  };

  return (
    <div className="container">
      <h1>Credit Card Input Widget</h1>
      <CreditCard cardInfo={state} />
      <CreditCardForm handleChange={handleChange} />

      <button type="submit" className="pay" onClick={() => console.log(state)}>
        Pay
      </button>
    </div>
  );
}
