import { User } from './User';
// import PropTypes from 'prop-types';

export const Contacts = ({ users, addUser }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {/* {users.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <User name={name} number={number} addUser={addUser} id={id} />
            </li>
          );
        })} */}
      </ul>
    </div>
  );
};
// UsersList.propTypes = {
//   users: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
// };
