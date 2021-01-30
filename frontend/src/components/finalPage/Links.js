import React from 'react'
import { Typography, IconButton } from '@material-ui/core'

import useStyles from './styles/finalPageStyles'

const Links = ({ website, icon, social }) => {
  const classes = useStyles()
  return (
    <div className={classes.linksContainer}>
      <a href={website} target="_blank" without rel="noreferrer">
        <IconButton>{icon}</IconButton>
      </a>

      <Typography className={classes.socialText}>{social}</Typography>
    </div>
  )
}

export default Links
