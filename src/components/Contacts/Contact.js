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
