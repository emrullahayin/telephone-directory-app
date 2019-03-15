import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import NumberFormat from 'react-number-format';


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
		fields: {
			id: 0,
			name: '',
			number: '',
		},
		errors: {
			name: false,
			number: false,
		}
	};

	static propTypes = {
		addContact: PropTypes.func,
		contacts: PropTypes.object,
	};

	handleChange = name => event => {
		let { fields, errors } = this.state;
		fields[name] = event.target.value;
		fields[name].length === 0 ? errors[name] = true : errors[name] = false;
		this.setState({ fields });
	};

	handleClick = () => {
		const { contacts } = this.props;
		let { fields, errors } = this.state,
			isError = false;

		for (let key in fields) {
			fields[key].length === 0 ? errors[key] = true : errors[key] = false;
			if (errors[key] === true) isError = true;
		}

		if (!isError) {
			fields["id"] = contacts.length;
			this.props.addContact({
				...fields
			});
		}
		this.setState({
			errors
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
					error={this.state.errors['name']}
					autoComplete="off" />

				<NumberFormat
					customInput={TextField}
					format="+90 (###) ### ## ##"
					mask="_"
					id="filled-phone"
					label="Enter a phone 5**"
					className={classes.textField}
					margin="normal"
					variant="filled"
					onChange={this.handleChange('number')}
					value={this.state.number}
					error={this.state.errors['number']}
					autoComplete="off" />

				<Button
					variant="contained"
					size="large"
					color="primary"
					className={classes.button}
					onClick={this.handleClick} >
					<SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
					Add
      			</Button>
			</form>
		)
	}
}
AddForm.propTypes = {
	classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(AddForm);