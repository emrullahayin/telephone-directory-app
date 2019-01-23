import React, { Component } from 'react';
import PersonList from './PersonList';
import AddForm from './AddForm'

export class Contacts extends Component {
  render() {
    return (
      <div>
        <PersonList />
        <AddForm />
      </div>
    )
  }
}

export default Contacts;