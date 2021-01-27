import React from 'react'
import { Typography } from '@material-ui/core'

import useStyles from './styles/aboutStyles'

export default function About() {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <div>
        <Typography>
          Hello! We are brother a brother a sister duo and have absolutely loved
          baking with our parents and grandparents since we were really young.
          We've taken our parents knowledge and skills and wanted to share our
          creations with you. Brødology was first created in our family kitchen
          growing up and it's been our passion ever since. We hope you enjoy
          eating these treats as much as we've enjoyed baking them! Love Jonas &
          Sofia
        </Typography>
      </div>
    </div>
  )
}
