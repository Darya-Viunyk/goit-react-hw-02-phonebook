import propTypes from 'prop-types';
export const Filter = ({ onChangeValue, value, getFilteredContacts }) => {
  return (
    <>
      <span>Find contacts by name</span>
      <div>
        <input
          value={value}
          onChange={onChangeValue}
          type="text"
          name="name"
          placeholder="Search"
        />
      </div>
    </>
  );
};
Filter.propTypes = {
  value: propTypes.string.isRequired,
  onChangeValue: propTypes.func.isRequired,
  getFilteredContacts: propTypes.func.isRequired,
};
