import React, { useContext } from 'react'
import {
  Typography,
  Button,
  Snackbar,
  Container,
  Grid,
  TextField,
  ThemeProvider,
} from '@material-ui/core'

import colorTheme from '../../colorTheme'
import useStyles from './styles/breadIndividualStyles'
import { BasketContext } from '../../context/basketContext'
import { showSingleBread } from '../../lib/api'

export default function BreadIndividual(props) {
  const classes = useStyles()
  const [data, setData] = React.useState()
  const [basketState, basketDispatch] = useContext(BasketContext)
  const [open, setOpen] = React.useState(false)
  const [quantity, setQuantity] = React.useState(1)

  React.useEffect(() => {
    const getData = async () => {
      const res = await showSingleBread(props.match.params.id)
      setData(res.data)
    }
    getData()
  }, [props.match.params.id])

  const handleAddToBasket = () => {
    // const amount = quantity * data.price
    // console.log('quantity', quantity)
    // console.log('price', data.price)
    // console.log('total', amount)
    // console.log(basket)

    basketDispatch({ type: 'add', item: data, quantity: Number(quantity) })
    setOpen(true)
    console.log(`added ${data.price} to basket`)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value)
    console.log(quantity)
  }

  if (!data) return null
  return (
    <ThemeProvider theme={colorTheme}>
      <Container maxWidth="md" className={classes.root}>
        <div className={classes.container}>
          <img src={data.image} alt={data.name} className={classes.image} />
          <div className={classes.breadInfo}>
            <Typography className={classes.breadName}>{data.name}</Typography>
            <br />
            <Typography className={classes.price}>{data.price} KR</Typography>
            <br />
            <Typography className={classes.text}>{data.description}</Typography>

            <TextField
              className={classes.numberInput}
              id="outlined-number"
              label="Antall"
              type="number"
              InputLabelProps={{
                shrink: true,
                classes: {
                  root: classes.numberText,
                  focused: classes.numberText,
                },
              }}
              variant="outlined"
              color="primary"
              onClick={handleQuantityChange}
            />

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
              message={`Du har lagt til ${data.name} i kurven din`}
            />
          </div>
        </div>
      </Container>
    </ThemeProvider>
  )
}
