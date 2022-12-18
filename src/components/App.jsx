import { Component } from 'react';
import { User } from './Contacts/User';
import { nanoid } from 'nanoid';
import { Contacts } from './Contacts/Contacts';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  addUser = data => {
    const newUser = { ...data, id: nanoid() };
    this.setState(prevState => ({ users: [...prevState.users, newUser] }));
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <div>
          <h3>Name</h3>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
        <button>Add contact</button>
        <Contacts />
        <User />
      </div>
    );
  }
}
