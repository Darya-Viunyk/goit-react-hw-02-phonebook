import { Component } from 'react';

export class Filter extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };
  onChangeFilter = value => {
    this.setState(prevState => ({
      filter: prevState.name.trim().toLowerCase(),
    }));
  };
  render() {
    return (
      <>
        <span>Find contacts by name</span>
        <div>
          <input
            value={this.state.value}
            onChange={this.onChangeFilter}
            type="text"
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
