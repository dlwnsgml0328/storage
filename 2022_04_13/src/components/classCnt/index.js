import React, { Component } from "react";

class ClassCnt extends Component {
  constructor(props) {
    super(props);

    this.initState = { job: "developer", name: "", age: "" };
    this.state = {
      ...this.initState,
      age: 20,
      name: "junhee",
      hobby: "coding",
    };
  }

  changeStage = () => {
    setTimeout(() => {
      this.setState({ hobby: "watching movie" });
    }, 2000);
  };

  componentDidMount() {
    this.changeStage();
  }

  render() {
    return (
      <div>
        <p>age: {this.state.age}</p>
        <p>name: {this.state.name}</p>
        <p>hobby: {this.state.hobby}</p>
        <p>job: {this.state.job && this.state.job}</p>
      </div>
    );
  }
}

export default ClassCnt;
