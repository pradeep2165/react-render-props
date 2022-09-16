import React, { Component } from "react";
class Counter extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }
  handelClickCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    return <div>{this.props.render(this.state.count, this.handelClickCount)}</div>;
  }
}

export default Counter;
