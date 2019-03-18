import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center', width: '100%',
    maxWidth: 360,
    margin: 'auto'
  },
  textField: {
    width: '100%',
    borderRadius: 4,
    marginBottom: 0
  },
  list: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    padding: 0,
  }
});

export class PersonList extends Component {
  state = {
    text: '',
  }

  static propTypes = {
    deleteContact: PropTypes.func,
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleDelete = id => event => this.props.deleteContact(id);

  render() {
    const { classes, contacts } = this.props;

    const filteredContacts = contacts.filter(contact => {
      const query = this.state.text.toLowerCase();
      return (
        contact.name.toLowerCase().indexOf(query) >= 0 ||
        contact.number.toLowerCase().indexOf(query) >= 0
      )
    });

    return (
      <div>
        <TextField
          id="filled-name"
          label="Filter by name or phone"
          className={classes.textField}
          value={this.state.text}
          onChange={this.handleChange('text')}
          margin="normal"
          variant="filled"
          autoComplete="off"
        />
        <List className={classes.list}>
          {filteredContacts.map((item, index) => {
            return (
              <ListItem button divider key={index}>
                <ListItemText primary={item.name} secondary={item.number} />
                <Tooltip title="Delete">
                  <IconButton aria-label="Delete" onClick={this.handleDelete(item.id)}>
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </ListItem>
            )
          })}
        </List>
      </div>
    )
  }
}

export default withStyles(styles)(PersonList);