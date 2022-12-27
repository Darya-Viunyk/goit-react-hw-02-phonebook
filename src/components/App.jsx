import { Component } from 'react';
import { FormContacts } from './FormContacts/FormContacts';
import { nanoid } from 'nanoid';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
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
  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(it => it.name.toLowerCase().includes(filter));
  };
  addUser = data => {
    const newUser = { ...data, id: nanoid() };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newUser],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(user => user.id !== id),
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <>
        <h2>Phonebook</h2>
        <div>
          <FormContacts addUser={this.addUser} />
        </div>
        <div>
          <h2>Contacts</h2>
          <Filter
            onChangeValue={event =>
              this.setState({ filter: event.target.value })
            }
            value={this.state.filret}
          />
          <Contacts
            contacts={contacts}
            deleteContact={this.deleteContact}
            addUser={this.addUser}
          />
        </div>
      </>
    );
  }
}
