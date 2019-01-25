import React, { Component } from 'react';

import './App.css';
import Contacts from './Contacts';

class App extends Component {
  state = {
    data: [
      {
        id: 1,
        name: 'Emrullah',
        number: '05536203452'
      },
      {
        id: 2,
        name: 'Mustafa',
        number: '05413890000'
      },
      {
        id: 3,
        name: 'Ali',
        number: '02124125252'
      }
    ]
  };
  
  addContact = () => {
    console.log("addContact Func")
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