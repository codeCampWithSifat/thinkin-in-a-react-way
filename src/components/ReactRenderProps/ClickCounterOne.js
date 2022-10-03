import React, { Component } from "react";

export default class ClickCounterOne extends Component {

  render() {
    const {count, incrementCounter} = this.props
    return (
      <div>
        <button onClick={incrementCounter} type="button">
          Clicked {count} Times
        </button>
      </div>
    );
  }
}
