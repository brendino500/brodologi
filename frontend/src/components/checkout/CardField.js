import React from 'react'
import { TextField, InputAdornment, ThemeProvider } from '@material-ui/core'
import LockIcon from '@material-ui/icons/Lock'

import CardFormInput from './CardFormInput'
import colorTheme from '../../colorTheme'
import useStyles from './styles/paymentStyles'

const CardField = () => {
  const classes = useStyles()

  const inputProps1 = () => {
    return {
      classes: {
        input: classes.inputText,
      },
    }
  }

  return (
    <ThemeProvider theme={colorTheme}>
      <div className={classes.container}>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            className={classes.textField}
            id="outlined-basic"
            fullWidth
            required
            label="Kortnummer"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
              classes: {
                input: classes.inputText,
              },
            }}
            InputLabelProps={{
              classes: {
                root: classes.inputText,
                focused: classes.inputText,
              },
            }}
          />
          <CardFormInput label="Navn på Kort" inputProps={inputProps1} />
          <CardFormInput label="Utløpsdato (MM/ÅÅ)" inputProps={inputProps1} />
          <CardFormInput label="Sikkerhetskode" inputProps={inputProps1} />
        </form>
      </div>
    </ThemeProvider>
  )
}

export default CardField
