import React from 'react';
import { useState } from 'react';
import { Grid } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { useForm } from '../useForm';
import { Form } from '../useForm';

import TextFieldStandard from '../components/controls/TextFieldStandard';
import TextFieldMultilineStandard from '../components/controls/TextFieldMultilineStandard';
import ButtonStandard from '../components/controls/ButtonStandard';

import axios from '../axios';

const initialFieldValues = {
  contactName: '',
  contactEmail: '',
	contactPhone: '',
	contactMessage: ''
}

const ContactForm = props => {

	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState('');

  const openSnackBar = () => {
    setOpen(true);
  };

  const handleSnackBarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

	const SlideTransition = (props) => {
		return <Slide {...props} direction="up" />;
	}
	
	const { values, setValues, handleInputChange } = useForm(initialFieldValues);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await axios.post('/ContactRequest', values).catch((err) => window.alert('Error: ', err));
		if (response) console.log(response);
		if (response.data) console.log(response.data);
		if (response.data) setMessage(response.data);
		openSnackBar();
	}

  return (
		<React.Fragment>
			<Form onSubmit={handleSubmit}>
				<h3>Contact Form</h3>
				<Grid container>
					<Grid item xs={12}>
						<TextFieldStandard
							label = 'Name'
							name = 'contactName'
							value = {values.contactName}
							onChange = {handleInputChange}
						/>
						<TextFieldStandard
							label = 'Email'
							name = 'contactEmail'
							value = {values.contactEmail}
							onChange = {handleInputChange}
						/>
						<TextFieldStandard
							label = 'Phone Number'
							name = 'contactPhone'
							value = {values.contactPhone}
							onChange = {handleInputChange}
						/>
						<TextFieldMultilineStandard
							label = 'Message'
							name = 'contactMessage'
							value = {values.contactMessage}
							onChange = {handleInputChange}
						/>
					</Grid>
					<Grid container item xs={12} direction = 'row' justify = 'flex-end' alignItems = 'center'>
						<ButtonStandard
							variant = 'contained'
							color = 'primary'
							size = 'large'
							text = 'Submit'
						/>
					</Grid>
				</Grid>
			</Form>
      <Snackbar
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				open={open}
				autoHideDuration={6000}
				onClose={handleSnackBarClose}
        TransitionComponent={SlideTransition}
				message={message}
				action={
					<React.Fragment>
						<IconButton size="small" aria-label="close" color="inherit" onClick={handleSnackBarClose}>
							<CloseIcon fontSize="small" />
						</IconButton>
					</React.Fragment>
				}
			/>
		</React.Fragment>
	)
}

export default ContactForm;
