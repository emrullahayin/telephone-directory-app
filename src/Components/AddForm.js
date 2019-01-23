import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'clasllahsnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		maxWidth: 360,
		margin: 'auto',
		backgroundColor: theme.palette.background.paper,
		padding: 15,
		marginTop: 15,
	},
	textField: {
		width: '100%',
		border: '1px solid #ddd',
		marginBottom: 0,
		marginTop: 15,
	},
	mTop0: {
		marginTop: 0
	},
	button: {
		marginTop: 15,
	},
	iconSmall: {
		fontSize: 20,
	},
	leftIcon: {
		marginRight: theme.spacing.unit,
	}
});

export class AddForm extends Component {
	state = {
		name: '',
		phone: ''
	};
	handleChange = (name, phone) => event => {
		this.setState({
			[name]: event.target.value,
			[phone]: event.target.value
		});
	};
	render() {
		const { classes } = this.props;
		return (
			<form className={classes.container}>
				<TextField
					id="filled-name"
					label="Enter a name"
					className={classNames(classes.mTop0, classes.textField)}
					value={this.state.name}
					onChange={this.handleChange('name')}
					margin="normal"
					variant="filled"
				/>
				<TextField
					id="filled-name"
					label="Enter a phone"
					className={classes.textField}
					value={this.state.phone}
					onChange={this.handleChange('phone')}
					margin="normal"
					variant="filled"
				/>
				<Button variant="contained" size="large" color="primary" className={classes.button}>
					<SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
					Add
      	</Button>
			</form>
		)
	}
}

export default withStyles(styles)(AddForm);