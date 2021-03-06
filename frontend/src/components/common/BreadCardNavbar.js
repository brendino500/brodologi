import React from 'react'
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Snackbar,
} from '@material-ui/core'
import CancelIcon from '@material-ui/icons/Cancel'
import { Link } from 'react-router-dom'

import { BasketContext } from '../../context/basketContext'
import useStyles from './styles/breadCardNavbarStyles'

export default function BreadCardNavbar() {
  const classes = useStyles()
  const [open, setOpen] = React.useState({
    isOpen: false,
  })
  const [basketState, basketDispatch] = React.useContext(BasketContext)
  const [itemsInBasket, setItemsInBasket] = React.useState([])

  React.useEffect(() => {
    let basketWithoutDuplicates = []
    basketState.basket.forEach((item) => {
      let unique = true
      for (let i = 0; i < basketWithoutDuplicates.length; i++) {
        if (basketWithoutDuplicates[i]._id === item._id) {
          unique = false
          break
        }
      }
      if (unique) {
        basketWithoutDuplicates.push(item)
      }
    })

    const quantity = {}
    for (let i = 0; i < basketState.basket.length; i++) {
      let num = basketState.basket[i]
      quantity[num._id] = quantity[num._id] ? quantity[num._id] + 1 : 1
    }
    basketWithoutDuplicates = basketWithoutDuplicates.map((x) => {
      x.quantity = quantity[x._id]
      return x
    })
    setItemsInBasket(basketWithoutDuplicates)
  }, [basketState.basket])

  const handleClickDelete = (breadID, breadName) => {
    setOpen({
      isOpen: true,
      breadName,
    })
    basketDispatch({ type: 'delete', breadID: breadID })
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen({
      isOpen: false,
      breadName: open.breadName,
    })
  }

  return (
    <Container className={classes.root}>
      {itemsInBasket.map((bread, breadIndex) => {
        if (bread === undefined) {
          console.log('Bread ID not found')
        } else {
          return (
            <>
              <Link
                to={`/butikk/${bread._id}`}
                className={classes.link}
                key={breadIndex}
              >
                <Card className={classes.card} elevation={0}>
                  <div className={classes.cardContent}>
                    <CardMedia
                      className={classes.image}
                      image={bread.image}
                      title={bread.name}
                    />
                    <CardContent className={classes.content}>
                      <IconButton
                        className={classes.cancelIcon}
                        onClick={() => {
                          handleClickDelete(bread._id, bread.name)
                        }}
                      >
                        <CancelIcon className={classes.cancelIcon} />
                      </IconButton>
                      <div>
                        <Typography className={classes.breadName} noWrap>
                          {bread.name}
                        </Typography>
                        <Typography className={classes.breadName} noWrap>
                          Mengde: {bread.quantity}
                        </Typography>
                        <Typography className={classes.price}>
                          {bread.price * bread.quantity} KR
                        </Typography>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            </>
          )
        }
      })}
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
        open={open.isOpen}
        autoHideDuration={3000}
        onClose={handleClose}
        message={`Du har fjernet ${open.breadName} fra kurven din`}
      />
    </Container>
  )
}
