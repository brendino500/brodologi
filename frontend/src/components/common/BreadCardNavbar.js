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
  const [open, setOpen] = React.useState(false)
  const [basketState, setBasketState] = React.useContext(BasketContext)
  const [itemsInBasket, setItemsInBasket] = React.useState([])

  React.useEffect(() => {
    setItemsInBasket(basketState)
  }, [basketState])

  const handleClickDelete = (breadID) => {
    setOpen(true)
    const newBasketState = [...basketState]
    newBasketState.splice(newBasketState.indexOf(breadID), 1)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
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
                to={`/breads/${bread._id}`}
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
                          handleClickDelete(bread._id)
                        }}
                      >
                        <CancelIcon className={classes.cancelIcon} />
                      </IconButton>
                      <div>
                        <Typography className={classes.plantName} noWrap>
                          {bread.name}
                        </Typography>
                        <Typography className={classes.price}>
                          {bread.price} KR
                        </Typography>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </Link>
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
                message={`You have removed ${bread.name} from your basket`}
              />
            </>
          )
        }
      })}
    </Container>
  )
}
