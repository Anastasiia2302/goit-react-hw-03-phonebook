import { Component } from 'react';
import Phonebook from './Phonebook/Phonebook';
import Filter from './Filter/Filter';
import ContactList from './Contacts/Contacts';
import { Container, Title } from 'PhoneBook.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  handlerSubmit = data => {
    const isExist = this.state.contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    )
    if (isExist) {
      alert(`${data.name} is already in contacts`)
    return;}
    


   this.setState(prevState => ({contacts:[...prevState.contacts, data] }));
   
    
    
  };

  onFilter = element => {
    const { value } = element.currentTarget;
    this.setState({ filter: value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <Container>
        <Title>Phonebook</Title>
        <Phonebook onSubmit={this.handlerSubmit} />

        <Title>Contacts</Title>
        <Filter value={filter} onFilter={this.onFilter} />
        <ContactList
          deleteContact={this.deleteContact}
          contacts={filterContacts}
        />
      </Container>
    );
  }
}

export default App;