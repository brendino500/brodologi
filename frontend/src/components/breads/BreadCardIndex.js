import React from 'react'
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

import useStyles from './styles/breadCardIndexStyles'

const BreadCardIndex = (props) => {
  const classes = useStyles()

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <Link to={`/breads/${props._id}`} className={classes.link}>
            <CardMedia className={classes.media} image={props.image} />
            <CardContent className={classes.paper}>
              <Typography className={classes.text} gutterBottom>
                {props.name}
              </Typography>
              <Typography className={classes.price}>
                {props.price} KR
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>
        <CardActions className={classes.paper}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Button
              fullWidth
              className={classes.button}
              size="small"
              // onClick={handleAddToBasket}
            >
              Add to Basket
            </Button>
            {/* <Snackbar
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
              message={`You have added ${props.name} to your basket`}
            /> */}
          </Grid>
        </CardActions>
      </Card>
    </div>
  )
}

export default BreadCardIndex
