import { Contact } from './Contact';

export const Contacts = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => {
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={deleteContact}
        />;
      })}
    </ul>
  );
};
