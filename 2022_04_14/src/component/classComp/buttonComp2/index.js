import { Component } from "react";

class Foo2 extends Component {
  handleClick() {
    console.log("Click happened in Foo 2");
  }
  render() {
    return <button onClick={this.handleClick.bind(this)}>Click Me</button>;
  }
}

export default Foo2;
