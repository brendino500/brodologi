import React from 'react'
import { Typography } from '@material-ui/core'

import CardField from './CardField'
import useStyles from './styles/paymentStyles'

export default function Payment() {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Typography className={classes.title}>Betaling</Typography>
      {/* <CardField /> */}
    </div>
  )
}
