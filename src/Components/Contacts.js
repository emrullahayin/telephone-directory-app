import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PersonList from './PersonList';
import AddForm from './AddForm'

export class Contacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    addContact: PropTypes.func,
    deleteContact: PropTypes.func,
  };
  render() {
    return (
      <div>
        <AddForm
          contacts={this.props.contacts}
          addContact={this.props.addContact}
        />
        <PersonList
          contacts={this.props.contacts}
          deleteContact={this.props.deleteContact}
        />
      </div>
    )
  }
}

export default Contacts;