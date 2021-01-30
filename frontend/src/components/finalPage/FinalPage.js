import React from 'react'
import { Typography } from '@material-ui/core'

import useStyles from './styles/finalPageStyles'

const FinalPage = () => {
  const classes = useStyles()
  return (
    <div>
      <Typography className={classes.title}>Hei, jeg er Brenda</Typography>
    </div>
  )
}

export default FinalPage
