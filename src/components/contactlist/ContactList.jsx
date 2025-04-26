import Contact from '../contact/Contact';
import './ContactList.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className="contact-list">
      <ul>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
