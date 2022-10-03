import React from "react";
import BoilingVerdict from "./BoilingVerdict";

const scaleNames = {
    c : "Celcious",
    f : "Farenheit"
}

class TemparatureInput extends React.Component {
  state = {
    temparature: "",
  };

  handleCelcious = (e) => [
    this.setState({
        temparature : e.target.value,
    })
  ]

  render() {
    const {temparature} = this.state
    const {scale} = this.props;
    return (
      <div>
        <fieldset>
          <legend>Enter Temparature In {scaleNames[scale]}</legend>
          <input type="text" value={temparature} onChange={this.handleCelcious} />
        </fieldset>
        <BoilingVerdict celcious={Number(temparature)}/>
      </div>
    );
  }
}

export default TemparatureInput;
