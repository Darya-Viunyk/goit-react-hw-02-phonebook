import { Contact } from './Contact';
export const Contacts = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => {
        return (
          <li key={id}>
            <Contact
              id={id}
              name={name}
              number={number}
              onDelete={deleteContact}
            />
          </li>
        );
      })}
    </ul>
  );
};
