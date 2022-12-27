import propTypes from 'prop-types';
export const Contact = ({ name, number, deleteContact, id }) => {
  return (
    <>
      <li key={id}>
        <span>{name}</span>
        <span>{number}</span>
        <button
          type="button"
          onClick={() => {
            deleteContact(id);
          }}
        >
          Delete
        </button>
      </li>
    </>
  );
};
Contact.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
  deleteContact: propTypes.func.isRequired,
};
