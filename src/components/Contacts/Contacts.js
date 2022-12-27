import { Contact } from './Contact';

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
