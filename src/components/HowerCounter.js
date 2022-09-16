import React, { Component } from "react";

class HowerCounter extends Component {
  render() {
    const { count, handelClickCount } = this.props;
    return (
      <div>
        <button onMouseOver={handelClickCount}>Howered {count}</button>
      </div>
    );
  }
}

export default HowerCounter;
