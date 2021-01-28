import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {
  Card,
  Typography,
  CardActionArea,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Snackbar,
  Grid,
} from '@material-ui/core'

import { BasketContext } from '../../context/basketContext'
import useStyles from './styles/breadCardIndexStyles'

const BreadCardIndex = ({ _id, image, name, price }) => {
  const classes = useStyles()
  const [basket, setBasket] = useContext(BasketContext)
  const [open, setOpen] = React.useState(false)

  const handleAddToBasket = () => {
    const bread = { name, price, _id, image }
    setBasket((curr) => [...curr, bread])
    setOpen(true)
    console.log(`added ${name} to basket`)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <Link to={`/butikk/${_id}`} className={classes.link}>
            <CardMedia className={classes.media} image={image} />
            <CardContent className={classes.paper}>
              <Typography className={classes.text} gutterBottom>
                {name}
              </Typography>
              <Typography className={classes.price}>{price} KR</Typography>
            </CardContent>
          </Link>
        </CardActionArea>
        <CardActions className={classes.paper}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Button
              fullWidth
              className={classes.button}
              size="small"
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
              anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
              open={open}
              autoHideDuration={3000}
              onClose={handleClose}
              message={`Du har lagt til ${name} i kurven din`}
            />
          </Grid>
        </CardActions>
      </Card>
    </div>
  )
}

export default BreadCardIndex
