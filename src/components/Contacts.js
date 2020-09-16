import React, { Component } from "react";

import Contact from './Contact';

import man from '../img/man-M.png';
import women from '../img/woman-W.png';
import unknown from "../img/unknown.jpg";


const contacts = [
  {
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male",
  },
  {
    firstName: "Яніна",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female",
  },
  {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
  },
  {
    firstName: "Ефозіна",
    lastName: "  Олдролована",
    phone: "+380504691254",
    gender: "female",
  },
  {
    firstName: "Маршеній",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male",
  },
  {
    firstName: "Теодор",
    lastName: "Мотсбестік",
    phone: "+380956319521",
    gender: "male",
  },
];

class Contacts extends Component {
  state = {
    contacts: [...contacts],
    search: "",
  };

 addGenderImage(gender) {
  if (gender === "male") {
    return man;
  } else if (gender === "female") {
    return women;
  } else {
    return unknown;
  }
}

search = (e) => {
  this.setState({ search: e.target.value });

  this.setState({
    contacts: [...contacts.filter(
        (el) =>
          el.firstName.toLowerCase().includes(e.target.value.toLowerCase()) ||
          el.lastName.toLowerCase().includes(e.target.value.toLowerCase()) ||
          el.phone.includes(e.target.value)
      ),
    ],
  });
};

render() {
  const { contacts, search } = this.state;
  return (
    <div className="block_inner">
      <h2>Contacts</h2>
      <div className="searchInput">
        <input value= {search} onChange= {this.search} placeholder=" &#128269; search" />
      </div>
      {contacts.map((people, i) => (
        <Contact
          firstName={people.firstName}
          lastName={people.lastName}
          gender={this.addGenderImage(people.gender)}
          phone={people.phone}
          key={i}
        />
      ))}
    </div>
  );
}
}

export default Contacts;