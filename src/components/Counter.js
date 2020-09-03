import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      isCount: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        isCount: prevState.isCount + 1,
      };
    });
  }

  render() {
    return (
      <div className="counterDiv">
        <h1>{this.state.isCount}</h1>
        <button onClick={this.handleClick}>Count on Me</button>
      </div>
    );
  }
}

export default Counter;
