import React from "react";
import "../css/App.css";

import Joke from "./Joke";

// function LeftContent() {
//   return (
//     <div className="left-content">
//       <h1>LeftContent</h1>
//       <Joke questions="What's Your Name?" answer="Madushan" another="test" />
//       <Joke questions="What's Your Age?" answer="Perera" another="test2" />
//     </div>
//   );
// }

class LeftContent extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogged: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        isLogged: !prevState.isLogged,
      };
    });
  }

  render() {
    let buttonText = this.state.isLogged ? "Log Out" : "Log In";
    let displayStatus = this.state.isLogged
      ? "You're Logged In"
      : "You're Logged Out";
    return (
      <div className="left-content">
        <h1>LeftContent</h1>
        <h1>{displayStatus}</h1>
        <button onClick={this.handleClick}>{buttonText}</button>
        <Joke questions="What's Your Name?" answer="Madushan" another="test" />
        <Joke questions="What's Your Age?" answer="Perera" another="test2" />
      </div>
    );
  }
}

export default LeftContent;
