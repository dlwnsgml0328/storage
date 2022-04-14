import { Component } from "react";

class Foo3 extends Component {
  handleClick() {
    console.log("Click happened in Foo 3");
  }
  render() {
    return <button onClick={() => this.handleClick()}>Click Me</button>;
  }
}

export default Foo3;
