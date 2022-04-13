import React, { Component } from "react";

class ClassCnt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 20,
      name: "junhee",
      hobby: "coding",
    };
  }

  changeStage = () => {
    setTimeout(() => {
      let data = { job: "developer" };
      this.setState(data);
    }, 3000);
  };

  componentDidMount() {
    this.changeStage();
  }

  render() {
    return (
      <div>
        <p>{this.state.age}</p>
        <p>{this.state.name}</p>
        <p>{this.state.hobby}</p>
        <p>{this.state.job && this.state.job}</p>
      </div>
    );
  }
}

export default ClassCnt;
