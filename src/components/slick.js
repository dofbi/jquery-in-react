import React from "react";
import { ImportScript } from "../services";

const Slick = () => {
  ImportScript("./js/load/slick.js");

  return (
    <div>
      <h2>Slick, the last carousel you'll ever need</h2>
      <div className="slick-track">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
      </div>
    </div>
  );
};

export default Slick;
