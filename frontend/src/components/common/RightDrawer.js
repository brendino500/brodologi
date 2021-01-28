import React from 'react'
import { Drawer, Button } from '@material-ui/core'

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
      <div className={classes.buttonList}>
        <h1>Basket</h1>
        <BreadCardNavbar />
      </div>
    </Drawer>
  )
}
