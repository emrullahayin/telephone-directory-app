import React, { Component } from 'react'
//import PropTypes from 'prop-types';
//import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
		name: '',
	}
	
	handleChange = name => event => {
		this.setState({
			[name]: event.target.value,
		});
	};
	
	render() {
		const { classes, contacts, text } = this.props;
		return (
			<div>
				<TextField
					id="filled-name"
					label="Filter by name or phone"
					className={classes.textField}
					value={text}
					onChange={this.handleChange.bind('text')}
					margin="normal"
					variant="filled"
					autoComplete="off"
				/>
				<List className={classes.list}>
					{contacts.map((item, index) => {
						return (
							<ListItem button divider key={index}>
								<ListItemText primary={item.name} secondary={item.number} />
							</ListItem>
						)
					})}
				</List>
			</div>
		)
	}
}

export default withStyles(styles)(PersonList);