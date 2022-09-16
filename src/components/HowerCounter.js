import React, { Component } from "react";

class HowerCounter extends Component {
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
        <button onMouseOver={this.handelClickCount}>Howered {this.state.count}</button>
      </div>
    );
  }
}

export default HowerCounter;
