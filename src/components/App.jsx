import React, { Component } from 'react';
import { nanoid } from 'nanoid';



class PhonebookForm extends Component {
  state = {
    name: '',
    id:'',
  }
  handleChange = (e) => {
    const { name, value, } = e.target;

    this.setState((prevState) => ({
      ...prevState,
      [name]: value,

    }))
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addContact(this.state)
  }
  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <div>
          <h3>Name</h3>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder='Name'
              required
            />
            <button type='submit'>Add contact</button>
          </form>
        </div>
      </div>
    );
  }
}

class ContactsList extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.contacts.map(({ name }) => (

            <li key={nanoid()}>{name}</li>

          ))}
        </ul>
      </div>

    );
  }
}
class AddPhoneContact extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = (newContact) => {

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    console.log(this.state.contacts)
    return (
      <div>
        <PhonebookForm addContact={this.addContact} />
        <ContactsList contacts={this.state.contacts} />
      </div>
    );
  }
}

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >

<AddPhoneContact/>
    </div>
  );
};
