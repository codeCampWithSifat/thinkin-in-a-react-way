import React from "react";

class Form extends React.Component {
  state = {
    title: "",
    text: "",
    frameWork: "",
    isAwesome: false,
  };

  handleChange = (e) => {
    if (e.target.type === "text") {
      this.setState({
        title: e.target.value,
      });
    } else if (e.target.type === "textarea") {
      this.setState({
        text: e.target.value,
      });
    } else if (e.target.type === "select-one") {
      this.setState({
        frameWork: e.target.value,
      });
    } else if (e.target.type === "checkbox") {
      this.setState({
        isAwesome: e.target.checked,
      });
    } else {
      // console.log(e.target.type)
      console.log("Nothing Is Here");
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, text, frameWork, isAwesome } = this.state;
    console.log(
      "title",
      title,
      "text",
      text,
      "frameWork",
      frameWork,
      "isAwesome",
      isAwesome
    );
    alert("Sucessfully Submitted");
  };
  render() {
    const { title, text, frameWork, isAwesome } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Please Fill Up The From</h2>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={title}
            onChange={this.handleChange}
          />{" "}
          <br />
          <textarea
            value={text}
            onChange={this.handleChange}
            placeholder="Enter Your Text"
            name=""
            id=""
            cols="30"
            rows="2"
          ></textarea>{" "}
          <br /> <br />
          <select value={frameWork} onChange={this.handleChange}>
            <option value="Vue">Vue</option>
            <option value="Angular">Angular</option>
            <option value="React">React</option>
            <option value="Motion Js">Motion Js</option>
          </select>
          <input
            type="checkbox"
            name=""
            id=""
            checked={isAwesome}
            onChange={this.handleChange}
          />{" "}
          <br /> <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
