import React from 'react'
import useStyles from './styles/navbarStyles'
import { Drawer, Button } from '@material-ui/core'

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
      </div>
    </Drawer>
  )
}
