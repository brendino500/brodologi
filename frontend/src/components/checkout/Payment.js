import React from 'react'
import { Typography } from '@material-ui/core'
import Fade from 'react-reveal/Fade'

import CardField from './CardField'
import useStyles from './styles/paymentStyles'

export default function Payment() {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Fade bottom cascade>
        <Typography className={classes.title}>Betaling</Typography>
        <div className={classes.formContainer}>
          <CardField />
        </div>
      </Fade>
    </div>
  )
}
