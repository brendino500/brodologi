import React, { useContext } from 'react'
import {
  Typography,
  Button,
  Snackbar,
  Container,
  Grid,
} from '@material-ui/core'

import useStyles from './styles/breadIndividualStyles'
import { BasketContext } from '../../context/basketContext'
import { showSingleBread } from '../../lib/api'

export default function BreadIndividual(props) {
  const classes = useStyles()
  const [data, setData] = React.useState()
  const [basket, setBasket] = useContext(BasketContext)
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const getData = async () => {
      const res = await showSingleBread(props.computedMatch.params.id)
      setData(res.data)
    }
    getData()
  }, [props.computedMatch.params.id])

  const handleAddToBasket = () => {
    setBasket((curr) => [...curr, data])
    setOpen(true)
    console.log(`added ${data.name} to basket`)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  if (!data) return null
  return (
    <>
      <Container maxWidth="md" className={classes.root}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <img src={data.image} alt={data.name} className={classes.image} />
          <div className={classes.breadInfo}>
            <Typography className={classes.breadName}>{data.name}</Typography>
            <br />
            <Typography className={classes.price}>{data.price} KR</Typography>
            <br />
            <Typography className={classes.text}>{data.description}</Typography>
            <Button
              className={classes.button}
              variant="contained"
              onClick={handleAddToBasket}
            >
              Legg i Handlekurv
            </Button>
            <Snackbar
              ContentProps={{
                classes: {
                  root: classes.snackbar,
                },
              }}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={open}
              autoHideDuration={3000}
              onClose={handleClose}
              message={`You have added ${data.name} to your basket`}
            />
          </div>
        </Grid>
      </Container>
    </>
  )
}
