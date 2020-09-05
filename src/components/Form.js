/* Formik for react forms */
import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      areaText: "Some default value",
      isFrindly: false,
      gender: "",
      favColor: "Blue",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    //event.target.nave/value
    const { name, value, type, checked } = event.target;

    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    const friendly =
      this.state.isFrindly && this.state.firstName !== ""
        ? "is friendly"
        : null;
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
          <br></br>
          <textarea
            name="areaText"
            onChange={this.handleChange}
            value={this.state.areaText}
          />
          <br></br>
          <label>
            <input
              type="checkbox"
              name="isFrindly"
              checked={this.state.isFrindly}
              onChange={this.handleChange}
            ></input>
            is Frindly?
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={this.state.gender === "Male"}
              onChange={this.handleChange}
            />
            Male
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={this.state.gender === "Female"}
              onChange={this.handleChange}
            />
            Female
          </label>
          <br />
          <select
            value={this.state.favColor}
            onChange={this.handleChange}
            name="favColor"
          >
            <option value="Blue">Blue</option>
            <option value="Yellow">Yellow</option>
            <option value="Green">Green</option>
            <option value="Red">Red</option>
          </select>
          <br />
          <button>Submit</button>
        </form>
        <h1>
          {this.state.firstName} {this.state.lastName} {friendly}{" "}
          {this.state.areaText} {this.state.gender} {this.state.favColor}
        </h1>
      </div>
    );
  }
}

export default Form;
