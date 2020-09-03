import React from "react";

function ContactCard(props) {
  return (
    <div className="contatct-card">
      <p>Picture:{props.contact.picture}</p>
      <p className="contact-name">Name:{props.contact.name}</p>
      <p>Number:{props.contact.phone}</p>
    </div>
  );
}

export default ContactCard;
