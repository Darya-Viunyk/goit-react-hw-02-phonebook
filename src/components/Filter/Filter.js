import { Component } from 'react';

export class Filter extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
    this.contacts.map({ [name]: { name, value } !== [name] });
  };

  render() {
    return (
      <>
        <span>Find contacts by name</span>
        <div>
          <input
            value={this.state.value}
            onChange={this.handleChange}
            type="text"
            name="name"
            placeholder="Search"
          />
        </div>
      </>
    );
  }
}
// import propTypes from 'prop-types';
// Filter.propTypes = {
//   value: propTypes.string.isRequired,
//   onChangeValue: propTypes.func.isRequired,
// };
