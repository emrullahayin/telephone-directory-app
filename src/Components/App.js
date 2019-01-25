import React, { Component } from 'react';

import './App.css';
import Contacts from './Contacts';

class App extends Component {
  state = {
    data: [
      {
        name: 'Emrullah',
        number: '05536203452'
      },
      {
        name: 'Mustafa',
        number: '05413890000'
      },
      {
        name: 'Ali',
        number: '02124125252'
      }
    ]
  };

  addContact = (contact) => {
    const { data } = this.state;
    data.push(contact);
    this.setState({
      data: data
    });

  }

  render() {
    return (
      <div className="App">
        <Contacts
          contacts={this.state.data}
          addContact={this.addContact}
        />
      </div>
    );
  }
}

export default App;