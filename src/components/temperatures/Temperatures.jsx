import React, { useState } from "react";
import './temperatures.css'

function Temperatures() {
  const [metric, setMetric] = useState([]);
  const [input, setInput] = useState([]);
  const [result, setResult] = useState([])

  const handleRadioChange = (value) => {
    setMetric(value)
  }

  const convert = function () {
    if(metric === "fahrenheit"){
      let temp = Number(input);
      temp = temp * 9/5 + 32;
      setResult(temp.toFixed(2) + "° Fahrenheit");

    } else if (metric === "celcius") {
      let temp = Number(input);
      temp = (temp - 32) * (5 / 9);
      setResult(temp.toFixed(2) + "° Celcius");
    }
  };

  const clearText = function() {
    setResult('')
    setInput('')
  }

  return (
    <div>
        <div>
          <h2>Temperatures</h2>
          <input
            type="number"
            className="text_box"
            id="text_box"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <br />

          <label htmlFor="fahrenheit">Celcius → Fahrenheit</label>
          <input
            type="radio"
            name="temp_select"
            id="fahrenheit"
            value={"fahrenheit"}
            checked={metric === "fahrenheit"}
            onChange={() => handleRadioChange("fahrenheit")}
          />
          <br />

          <label htmlFor="celcius">Fahrenheit → Celcius</label>
          <input
            type="radio"
            name="temp_select"
            id="celcius"
            value={"celcius"}
            checked={metric === "celcius"}
            onChange={() => handleRadioChange("celcius")}
          />
          <br />

          <button type="button" onClick={convert}>
            Submit
          </button>
          <button type="reset" onClick={clearText}>
            Clear
          </button>

          <p
            id="result"
            className="result_box"
          >{result}</p>
        </div>
    </div>
  );
}

export default Temperatures;
