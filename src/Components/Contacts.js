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
        <PersonList
          contacts={this.props.contacts}
        />
        <AddForm
          addContact={this.props.addContact}
        />
      </div>
    )
  }
}

export default Contacts;