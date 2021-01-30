import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Drawer, Button, Typography, Grid } from '@material-ui/core'

import BreadCardNavbar from './BreadCardNavbar'
import useStyles from './styles/navbarStyles'
import { BasketContext } from '../../context/basketContext'

export default function RightDrawer({ isOpen, onClose }) {
  const classes = useStyles()
  const [basketState, basketDispatch] = useContext(BasketContext)

  return (
    <Drawer
      anchor={'right'}
      open={isOpen}
      onClose={onClose}
      className={classes.rightDrawer}
      classes={{
        paper: classes.drawerPaperRight,
      }}
    >
      <div>
        <div className={classes.breadCardContainer}>
          <Typography className={classes.titleCart}>Handlevogn</Typography>
          <BreadCardNavbar />
        </div>
        <div className={classes.checkoutButtonLayout}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Typography className={classes.basketTotal}>TOTAL</Typography>
            <Typography className={classes.basketTotal}>
              {basketState.total}KR
            </Typography>
          </Grid>

          <Link to="/betaling" className={classes.link}>
            <Button className={classes.checkoutButton} fullWidth>
              Sjekk ut
            </Button>
          </Link>
        </div>
      </div>
    </Drawer>
  )
}
