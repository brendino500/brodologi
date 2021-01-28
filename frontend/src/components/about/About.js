import React from 'react'
import { Typography } from '@material-ui/core'
import image from '../../assets/headshot.png'

import useStyles from './styles/aboutStyles'

export default function About() {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <div className={classes.textWithPhoto}>
        <img src={image} alt="brothers" className={classes.image} />
        <div className={classes.textContainer}>
          <Typography>
            <Typography variant="h3" className={classes.title}>
              Hallo!
            </Typography>
            <Typography className={classes.text}>
              Vi er en broderduo og har absolutt elsket å bake med foreldrene og
              besteforeldrene våre siden vi var veldig små. Vi har tatt
              foreldrene våre kunnskap og ferdigheter og ønsket å dele
              kreasjonene våre med deg. Brødology ble først opprettet i vårt
              familiekjøkken i oppveksten, og det har vært vår lidenskap siden.
            </Typography>
            <Typography className={classes.text}>
              Vi håper du liker å spise disse godbitene like mye som vi har likt
              å bake dem!
            </Typography>
            <Typography className={classes.text}>
              Elsker Jonas og Aksel
            </Typography>
          </Typography>
        </div>
      </div>
    </div>
  )
}
