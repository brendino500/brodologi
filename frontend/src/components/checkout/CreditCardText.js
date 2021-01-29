import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { FaCcVisa, FaCcAmex } from 'react-icons/fa'
import { SiMastercard } from 'react-icons/si'

import useStyles from './styles/paymentStyles'
const CreditCardText = () => {
  const classes = useStyles()
  return (
    <div>
      <div className={classes.creditCardTextLayout}>
        <div>
          <Typography className={classes.creditCardText}>
            Kredittkort
          </Typography>
        </div>
        <div className={classes.creditCardIconLayout}>
          <FaCcVisa className={classes.cardIcons} />
          <SiMastercard className={classes.cardIcons} />
          <FaCcAmex className={classes.cardIcons} />
        </div>
      </div>
    </div>
  )
}

export default CreditCardText
