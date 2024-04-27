import { useState } from "react";
import contact from "../data/contact";
import "../styles/Contact.css";

const Contact = () => {
  const [contactData, setContactData] = useState(contact);

  const contactItems = Object.entries(contactData).map((entry) => {
    const [key, value] = entry;

    return (
      <li key={key + value}>
        {key}: {value}
      </li>
    );
  });

  return (
    <section className="contact">
      <h2>Contact</h2>
      <ul className="contact__list">{contactItems}</ul>
    </section>
  );
};

export default Contact;
