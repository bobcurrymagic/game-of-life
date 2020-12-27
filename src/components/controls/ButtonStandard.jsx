import React from 'react';
import { Button } from '@material-ui/core'

export default function ButtonStandard(props) {

	const {text, size, color, variant, onClick} = props;

	return (
		<Button
			type = 'submit'
			variant = {variant}
			size = {size}
			color = {color}
			onClick = {onClick}
	>
			{text}
		</Button>
	)
}
