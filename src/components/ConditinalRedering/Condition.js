import React from "react";
import ClockButton from "./ClockButton";

class Condition extends React.Component {
  state = { date: new Date(), locale: "bn-BD" };

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  handleClick = (locale) => {
    this.setState({
      locale,
    });
  };

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    console.log("clock component rendered");
    const { date, locale } = this.state;
    // let button;
    // if (locale === "bn-BD") {
    //   button = (
    //     <ClockButton change={this.handleClick} locale="en-US">
    //       Click here
    //     </ClockButton>
    //   );
    // } else {
    //   button = (
    //     <ClockButton change={this.handleClick} locale="bn-BD">
    //       Click here
    //     </ClockButton>
    //   );
    // }
    return (
      <div>
        <h1 className="heading">
          <span className="text">{date.toLocaleTimeString(locale)}</span>
        </h1>
        {locale === "bn-BD" ? (
          <ClockButton change={this.handleClick} locale="en-US">
            Click here
          </ClockButton>
        ) : (
          <ClockButton change={this.handleClick} locale="bn-BD">
            Click here
          </ClockButton>
        )}
      </div>
    );
  }
}

export default Condition;
