import { Component } from 'react';
import { Form } from './Form/Form';
import { nanoid } from 'nanoid';
import { Contacts } from './Contacts/Contacts';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  addUser = data => {
    const newUser = { ...data, id: nanoid };
    this.setState(prevState => ({ contacts: [...prevState.contact, newUser] }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contact.filter(user => user.id !== id),
    }));
  };
  render() {
    const { contacts, addUser, deleteContact } = this.state;
    return (
      <>
        <h2>Phonebook</h2>
        <div>
          <Form addUser={addUser} />
        </div>
        <div>
          <h2>Contacts</h2>
          <Contacts
            contacts={contacts}
            deleteContact={deleteContact}
            addUser={addUser}
          />
        </div>
      </>
    );
  }
}
