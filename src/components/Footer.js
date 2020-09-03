import React, { Component } from "react";
import "../css/App.css";

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      name: "Madushan",
      age: "24",
      isLoggedIn: true,
    };
  }
  render() {
    let displayStatus;
    if (this.state.isLoggedIn) {
      displayStatus = "in";
    } else {
      displayStatus = "out";
    }

    function buttonOnClick() {
      console.log("I was clicked");
    }

    function imgHover() {
      console.log("I are hovering me");
    }

    return (
      <footer className="footer">
        <h1>Footer</h1>
        <p>I'm {this.state.name}</p>
        <p>and I'm {this.state.age} years old.</p>
        <p>
          1. Medthod-
          {this.state.name}, You're currently logged
          {this.state.isLoggedIn ? "in" : "out"}
        </p>
        <p>
          2. Medthod-
          {this.state.name}, You're currently logged
          {displayStatus}
        </p>
        <div className="footerImg">
          <img
            src="https://homepages.cae.wisc.edu/~ece533/images/pool.png"
            onMouseOver={imgHover}
            alt="Just an LOL"
          ></img>
          <button onClick={buttonOnClick}>Click Me!</button>
        </div>
      </footer>
    );
  }
}

export default Footer;

// import React from "react";

// import "../css/App.css";

// // function Footer() {
// //   return (
// //     <footer className="footer">
// //       <h1>Footer</h1>
// //     </footer>
// //   );
// // }

// class Footer extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Madushan",
//       age: "24",
//       isLoggedin: true,
//     };
//   }

//   render() {
//     return (
//       <footer className="footer">
//         <h1>Footer</h1>
//         <p>{this.state.name}</p>
//         <p>{this.state.age} years old</p>
//         <p>You are currently logged {this.state.isLoggedin ? "in" : "out"}</p>
//       </footer>
//     );
//   }
// }

// export default Footer;
