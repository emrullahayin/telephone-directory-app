import React, { Component } from 'react';

import './App.css';
import Contacts from './Contacts';

class App extends Component {
  state = {
    data: [
      {
        id: 0,
        name: 'Emrullah',
        number: '+90 553 620 34 52'
      },
      {
        id: 1,
        name: 'Mustafa',
        number: '+90 541 389 00 00'
      },
      {
        id: 2,
        name: 'Ali',
        number: '+90 532 412 52 52'
      }
    ]
  };

  addContact = (contact) => {
    const { data } = this.state;
    data.push(contact);
    this.setState({ data });
  }
  deleteContact = (id) => {
    const { data } = this.state;
    delete data[id];
    this.setState({ data });
  }
  render() {
    return (
      <div className="App">
        <Contacts
          contacts={this.state.data}
          addContact={this.addContact}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;