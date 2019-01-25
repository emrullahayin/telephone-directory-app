import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
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
		fields: {
			name: '',
			phone: ''
		},
		errors: {
			name: false,
			phone: false
		}
	};
	static propTypes = {
		addContact: PropTypes.func,
	};
	handleChange = name => event => {
		let { fields, errors } = this.state;
		fields[name] = event.target.value;
		fields[name].length === 0 ? errors[name] = true : errors[name] = false;
		this.setState({ fields });
	};

	handleClick = () => {
		let { fields, errors } = this.state,
			isError = false;

		for (let key in fields) {
			fields[key].length === 0 ? errors[key] = true : errors[key] = false;
			if (errors[key] === true) isError = true;
		}

		if (!isError) {
			this.props.addContact({
				...this.state
			});
		}

		this.setState({ errors });
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
					autoComplete="off"
				/>
				<TextField
					id="filled-name"
					label="Enter a phone"
					className={classes.textField}
					value={this.state.phone}
					onChange={this.handleChange('phone')}
					margin="normal"
					variant="filled"
					error={this.state.errors['phone']}
					autoComplete="off"
				/>
				<Button
					variant="contained"
					size="large"
					color="primary"
					className={classes.button}
					onClick={this.handleClick}
				>
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