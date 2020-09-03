import React from "react";
import "../css/App.css";

import ContactCard from "./ContactCard";

class RightContent extends React.Component {
  render() {
    return (
      <div className="right-content">
        <h1>RightContent</h1>
        <ContactCard
          contact={{
            picture: "LOLOLLO",
            name: "Madushan",
            phone: "0772411990",
          }}
        />
        <ContactCard
          contact={{
            picture: "HAHAHA",
            name: "Chandima",
            phone: "0772411990",
          }}
        />
        <ContactCard
          contact={{
            picture: "YEYEYE",
            name: "Perera",
            phone: "0772411990",
          }}
        />
      </div>
    );
  }
}

export default RightContent;
