import React from 'react'
import { Drawer, Button, Typography, Grid } from '@material-ui/core'

import BreadCardNavbar from './BreadCardNavbar'
import useStyles from './styles/navbarStyles'

export default function RightDrawer({ isOpen, onClose }) {
  const classes = useStyles()

  return (
    <Drawer
      anchor={'right'}
      open={isOpen}
      onClose={onClose}
      className={classes.rightDrawer}
    >
      <div>
        <div>
          <Typography className={classes.titleCart}>Handlevogn</Typography>
          <BreadCardNavbar />
        </div>
        <div className={classes.checkoutButtonLayout}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <Typography className={classes.basketTotal}>TOTAL</Typography>
            <Typography className={classes.basketTotal}>59 KR</Typography>
          </Grid>
          <Button className={classes.checkoutButton} fullWidth>
            Sjekk ut
          </Button>
        </div>
      </div>
    </Drawer>
  )
}
