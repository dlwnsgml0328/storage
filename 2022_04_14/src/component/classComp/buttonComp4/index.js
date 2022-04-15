import React, { Component } from "react";

class Foo4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num: 1,
    };
  }
  changeNum2 = () => {
    this.setState({ num: 2 });
  };

  changeNum4 = () => {
    this.setState({ num: 4 });
  };

  changeNum6 = () => {
    this.setState({ num: 6 });
  };

  changeState = () => {
    this.changeNum4();
    this.changeNum2();
    this.changeNum6();
  };

  componentDidMount() {
    console.log("this.state.num init: ", this.state.num);
  }

  componentDidUpdate() {
    console.log("this.state.num is: ", this.state.num);
  }

  render() {
    return (
      <>
        <h1>Button Component4</h1>
        {this.state.num}
        <button type="button" onClick={this.changeState}>
          change
        </button>
      </>
    );
  }
}

export default Foo4;
