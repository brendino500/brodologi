import React from 'react'
import { TextField, Typography, InputAdornment } from '@material-ui/core'
import LockIcon from '@material-ui/icons/Lock'

import useStyles from './styles/paymentStyles'

const CardField = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <form className={classes.form} noValidate autoComplete="off">
        <TextField
          id="card-num"
          fullWidth
          required
          label="Card Number"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="name"
          fullWidth
          required
          label="Name on Card"
          variant="outlined"
        />
        <TextField
          id="Expiration"
          fullWidth
          required
          label="Expiration date (MM/YY)"
          variant="outlined"
        />
        <TextField
          id="security code"
          fullWidth
          required
          label="Security code"
          variant="outlined"
          className={classes.TextField}
        />
      </form>
    </div>
  )
}

export default CardField
