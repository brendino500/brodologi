import React from 'react'
import { Typography, Container, Grid } from '@material-ui/core'
import Slide from 'react-reveal/Slide'

import { getAllBreads } from '../../lib/api'
import BreadCardIndex from './BreadCardIndex'
import useStyles from './styles/breadsIndexStyles'

export default function BreadsIndex() {
  const classes = useStyles()
  const [data, setData] = React.useState([])

  const getData = async () => {
    const res = await getAllBreads()
    setData(res.data)
  }

  React.useEffect(() => {
    getData()
  }, [])

  if (!data) return null
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>
        <b>Butikk</b>
      </Typography>
      <Container>
        <Slide bottom>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            {data.map((bread) => (
              <BreadCardIndex key={bread._id} {...bread} />
            ))}
          </Grid>
        </Slide>
      </Container>
    </div>
  )
}
