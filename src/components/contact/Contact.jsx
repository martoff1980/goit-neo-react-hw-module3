import { FaUser, FaPhone } from 'react-icons/fa';
import './Contact.css';
const Contact = ({ contact, onDelete }) => {
  return (
    <li className="contact-item">
      <div className="contact-info">
        <div>
          <FaUser />
          {contact.name}
        </div>
        <div>
          <FaPhone />
          {contact.number}
        </div>
      </div>
      <div className="contact-actions">
        <button onClick={() => onDelete(contact.id)}>Delete</button>
      </div>
    </li>
  );
};

export default Contact;
