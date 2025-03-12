const Contact = ({ contact, onDelete }) => {
  const handleDelete = () => {
    onDelete(contact.id);
  };

  return (
    <li className="contact-item">
      <p>
        {contact.name}: {contact.number}
      </p>
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
