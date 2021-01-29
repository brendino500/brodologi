import React from 'react'
import { TextField } from '@material-ui/core'

import useStyles from './styles/paymentStyles'

const CardFormInput = ({ label, inputProps }) => {
  const classes = useStyles()
  return (
    <TextField
      className={classes.textField}
      id="outlined-basic"
      fullWidth
      required
      label={label}
      variant="outlined"
      color="primary"
      InputProps={inputProps}
      InputLabelProps={{
        classes: {
          root: classes.inputText,
          focused: classes.inputText,
        },
      }}
    />
  )
}

export default CardFormInput
