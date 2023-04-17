import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Contacts from './Contacts/Contacts';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  addNameToList = event => {
    event.preventDefault();
    this.setState(({ contacts }) => {
      return {
        contacts: [
          ...contacts,
          { id: nanoid(), name: this.state.name, number: this.state.number },
        ],
      };
    });
    this.setState({ name: '', number: '' });
  };

  inputData = ({ currentTarget }) => {
    this.setState({ [currentTarget.name]: currentTarget.value });
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.addNameToList}>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id="name"
            value={this.state.name}
            onChange={this.inputData}
          />
          <br />
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id="phone"
            value={this.state.number}
            onChange={this.inputData}
          />
          <br />
          <button className="button" type="submit">
            Add contact
          </button>
        </form>
        <div>
          <p>Contacts</p>
          <label>
            Find contacts by name
            <input
              type="text"
              name="filter"
              value={this.state.filter}
              onChange={this.inputData}
            />
          </label>

          {this.state.contacts.length !== 0 && (
            <Contacts
              contacts={this.state.contacts}
              filter={this.state.filter}
            />
          )}
        </div>
      </div>
    );
  }
}
