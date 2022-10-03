import React, { Component } from "react";

export default class HoverCounterOne extends Component {

  render() {
    const {count, incrementCounter} = this.props;
    return (      
      <div>
        <h1 onMouseOver={incrementCounter} >
          Clicked {count} Times
        </h1>
      </div>
    );
  }
}
