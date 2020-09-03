import React, { Component } from "react";

import "../css/App.css";

// function Greetings(props) {
//   const date = new Date();
//   const hours = date.getHours();
//   let timeOfDay;
//   const styles = {
//     color: "#31d6a2",
//   };

//   if (hours < 12) {
//     timeOfDay = "Morning";
//     styles.color = "#31d6a2";
//   } else if (hours >= 12 && hours < 17) {
//     timeOfDay = "Afternoon";
//     styles.color = "#d0d631";
//   } else {
//     timeOfDay = "Night";
//     styles.color = "#d63194";
//   }

//   return (
//     <div>
//       <h1 style={styles}>
//         Good {timeOfDay}, {props.name}!
//       </h1>
//     </div>
//   );
// }

class Greetings extends Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    const styles = {
      color: "#31d6a2",
    };

    if (hours < 12) {
      timeOfDay = "Morning";
      styles.color = "#31d6a2";
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "Afternoon";
      styles.color = "#d0d631";
    } else {
      timeOfDay = "Night";
      styles.color = "#d63194";
    }

    //this.props Inside classes

    return (
      <div>
        <h1 style={styles}>
          Good {timeOfDay}, {this.props.name}!
        </h1>
      </div>
    );
  }
}

export default Greetings;
