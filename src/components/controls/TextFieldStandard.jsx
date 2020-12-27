import React from 'react'
import { TextField } from '@material-ui/core';

export default function TextFieldStandard(props) {

  const { name, label, value, onChange } = props;

  return (
    <TextField
      variant = 'filled'
      label = {label}
      name = {name}
      value = {value}
      onChange = {onChange}
    />
  )
}
