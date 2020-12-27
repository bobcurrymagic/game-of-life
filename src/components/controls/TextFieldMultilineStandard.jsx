import React from 'react'
import { TextField } from '@material-ui/core';

export default function TextFieldMultilineStandard(props) {

  const { name, label, value, onChange } = props;

  return (
    <TextField
			multiline
			rows={2}
      variant = 'filled'
      label = {label}
      name = {name}
      value = {value}
      onChange = {onChange}
    />
  )
}
