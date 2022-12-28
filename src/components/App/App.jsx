import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { Container, NameH2 } from './App.styled';
import { FormContacts } from 'components/FormContacts/FormContacts';

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
    if (this.state.contacts.some(it => it.name === this.contacts.name)) {
      alert(`${this.contacts.name} is alredy in contacts`);
      return;
    }
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
    return (
      <>
        <Container>
          <NameH2>Phonebook</NameH2>
          <div>
            <FormContacts addUser={this.addUser} />
          </div>
          <div>
            <NameH2>Contacts</NameH2>
            <Filter
              onChangeValue={event =>
                this.setState({ filter: event.target.value })
              }
              value={this.state.filter}
            />

            <Contacts
              contacts={this.getFilteredContacts()}
              deleteContact={this.deleteContact}
              addUser={this.addUser}
            />
          </div>
        </Container>
      </>
    );
  }
}
