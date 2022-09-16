import React, { Component } from "react";

class ClickCounter extends Component {
  render() {
    const { count, handelClickCount } = this.props;
    return (
      <div>
        <button onClick={handelClickCount}>Click {count} time</button>
      </div>
    );
  }
}

export default ClickCounter;
