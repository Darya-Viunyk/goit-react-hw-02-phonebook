import { Component } from 'react';
import { Form } from './Form/Form';
import { nanoid } from 'nanoid';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  addUser = data => {
    const newUser = { ...data, id: nanoid };
    this.setState(prevState => ({ users: [...prevState.user, newUser] }));
  };
  render() {
    return (
      <div>
        <h2>Phonebook</h2>

        <Form addUser={this.addUser} />
      </div>
    );
  }
}
