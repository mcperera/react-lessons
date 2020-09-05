import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={this.handleChange}
          ></input>
          <br></br>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
          ></input>
        </form>
        <h1>
          {this.state.firstName} {this.state.lastName}
        </h1>
      </div>
    );
  }
}

export default Form;
