import React from "react";
import { ImportScript } from "../services";

const Counter = () => {
  ImportScript("./js/load/counter.js");

  return (
    <div>
      <h2>Counter-Up is a jQuery plugin that animates a number from zero</h2>
      <h3 className="counter">1,234,567.00</h3>
      <h3 className="counter">1.99</h3>
      <h3 className="counter">12345</h3>
    </div>
  );
};

export default Counter;
