import React from "react";

import Navigation from "./Navigation";
import Greetings from "./Greetings";
import "../css/App.css";

// function Header() {
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
//     <header className="App-header">
//       <h1 style={styles}>Good {timeOfDay}, Madushan!</h1>
//       <Navigation />
//     </header>
//   );
// }

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <Greetings name="Madu" />
        <Navigation />
      </header>
    );
  }
}

export default Header;
