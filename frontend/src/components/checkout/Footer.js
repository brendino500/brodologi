import React from 'react'
import { Typography } from '@material-ui/core'

import useStyles from './styles/paymentStyles'
const Footer = () => {
  const classes = useStyles()
  return (
    <div>
      <Typography className={classes.footer}>
        (Dette er ikke et ekte nettsted, og dette skjemaet gjør ingenting / This
        isn't a real website and this form doesn't do anything.)
      </Typography>
    </div>
  )
}

export default Footer
