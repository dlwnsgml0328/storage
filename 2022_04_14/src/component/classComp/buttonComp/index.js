import { Component } from "react";

class Foo extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log("Click happened in Foo 1");
  }
  render() {
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}

export default Foo;
