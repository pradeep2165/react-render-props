import React, { Component } from "react";

class ClickCounter extends Component {
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
    return (
      <div>
        <button onClick={this.handelClickCount}>Click {this.state.count} time</button>
      </div>
    );
  }
}

export default ClickCounter;
