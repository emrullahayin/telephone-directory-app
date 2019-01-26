import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PersonList from './PersonList';
import AddForm from './AddForm'

export class Contacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    addContact: PropTypes.func,
  };
  render() {
    return (
      <div>
        <AddForm
          addContact={this.props.addContact}
        />
        <PersonList
          contacts={this.props.contacts}
        />
      </div>
    )
  }
}

export default Contacts;