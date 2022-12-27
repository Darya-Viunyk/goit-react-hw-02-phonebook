export const Filter = ({ onChangeValue, value }) => {
  // const onChange = event => {
  //   const value = event.target.value.trim().toLowerCase();
  //   onChangeValue(value);
  // };

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

// handleSudmit = event => {
//   event.preventDefault();
//   console.dir(event.target.elements.name.value);
// };
// handleChange = ({ target: { name, value } }) => {
//   this.setState({ [name]: value });
// };

// import propTypes from 'prop-types';
// Filter.propTypes = {
//   value: propTypes.string.isRequired,
//   onChangeValue: propTypes.func.isRequired,
// };
