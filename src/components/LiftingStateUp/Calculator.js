import React from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemparatureInput from "./TemparatureInput";

class Calculator extends React.Component {


  render() {
    return (
      <div>
        <TemparatureInput scale="c"/>
        <TemparatureInput scale="f"/>
        {/* <BoilingVerdict /> */}
      </div>
    );
  }
}

export default Calculator;
