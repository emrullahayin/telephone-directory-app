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
	handleChange = name => event => {
		this.setState({
			[name]: event.target.value,
		});
	};
	render() {
		const { classes } = this.props;
		const { data } = this.state;
		return (
			<div>
				<TextField
					id="filled-name"
					label="Filter by name or phone"
					className={classes.textField}
					value={this.state.name}
					onChange={this.handleChange('name')}
					margin="normal"
					variant="filled"
					autoComplete="off"
				/>
				<List className={classes.list}>
					{data.map((item, index) => {
						return (
							<ListItem divider key={item.id}>
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