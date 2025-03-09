const Contact = ({ contact }) => {
  return (
    <li className="contact-item">
      <p>
        {contact.name}: {contact.number}
      </p>
      <button>Delete</button>
    </li>
  );
};

export default Contact;
