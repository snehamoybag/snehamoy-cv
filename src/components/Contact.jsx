import "../styles/Contact.css";

const Contact = () => {
  const phoneNumber = "+91 6294 299 196";
  const email = "snehamoybag69#gmail.com";

  return (
    <sectin className="contact">
      <h2>Contact</h2>
      <ul className="contact__list">
        <li>
          <p>Phone Number: {phoneNumber}</p>
        </li>
        <li>
          <p>Email: {email}</p>
        </li>
      </ul>
    </sectin>
  );
};

export default Contact;
