import React from "react";


const Contact = ({ firstName, lastName, gender, phone }) => {
  return (
    <div className="container">
      <div className="info">
        <div className="name">
          {firstName} {lastName}
        </div>
        <div className="gender">
          <img className="img" src={gender} />
        </div>
      </div>
      <div className="phone">{phone}</div>
    </div>
  );
};

export default Contact;