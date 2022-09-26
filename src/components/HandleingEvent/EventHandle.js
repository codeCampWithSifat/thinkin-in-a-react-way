import React, { Component } from "react";

export default class EventHandle extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         date : new Date(),
    //     }
    // }
    state = {date : new Date()}
    componentDidMount(){
        // this.clockTimer is my Own Method
       this.clockTimer = setInterval(() => this.tick() , 1000);
    }
    componentWillUnmount() {
        clearInterval(this.clockTimer)
    }

    tick () {
        this.setState({
            date : new Date()
        })
    }

    // componentDidMount() {
    //     setInterval(() => {
    //         this.setState({
    //             date : new Date()
    //         })
    //     }, 1000);
    // }
    ClickHandler = () => {
        console.log("button was clicked")
    }
  render() {
    return (
      <div>
        <h1>
          <span> {this.state.date.toLocaleTimeString("bn-BD")}</span>
        </h1>
        <button onClick={this.ClickHandler}>Click The Button</button>
      </div>
    );
  }
}
