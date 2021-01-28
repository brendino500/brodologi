import React from 'react'
import { Typography } from '@material-ui/core'
import useStyles from './styles/homeStyles'

const Home = () => {
  const classes = useStyles()
  return (
    <section className={classes.background}>
      <div>
        <Typography className={classes.title}>Brødologi</Typography>
      </div>
    </section>
  )
}

export default Home
