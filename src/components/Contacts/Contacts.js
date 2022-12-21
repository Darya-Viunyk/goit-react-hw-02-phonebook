import { Contact } from './Contact';

export const Contacts = ({ id, contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => {
        return (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={deleteContact}
          />
        );
      })}
    </ul>
  );
};
