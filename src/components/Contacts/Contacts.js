import { Contact } from './Contact';
import propTypes from 'prop-types';
export const Contacts = ({ contacts, deleteContact, getFilteredContacts }) => {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => {
        return (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            deleteContact={deleteContact}
          />
        );
      })}
    </ul>
  );
};
Contacts.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: propTypes.func.isRequired,
  getFilteredContacts: propTypes.func.isRequired,
};
