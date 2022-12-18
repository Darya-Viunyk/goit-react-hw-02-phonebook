export const User = ({ name, number }) => {
  return (
    <>
      <p>
        name: <span>{name}</span>
      </p>
      <p>
        number: <span>{number}</span>
      </p>
      <button
        type="button"
        onClick={() => {
          // addUser(id);
        }}
      >
        Add User
      </button>
    </>
  );
};
