import React from 'react'
import useStyles from './styles/navbarStyles'
import { Drawer, Button } from '@material-ui/core'

export default function LeftDrawer({ isOpen, onClose }) {
  const classes = useStyles()

  return (
    <Drawer
      anchor={'left'}
      open={isOpen}
      onClose={onClose}
      className={classes.LeftDrawer}
    >
      <div className={classes.buttonList}>
        <Button className={classes.sideMenu}>Hjem</Button>
        <Button className={classes.sideMenu}>Butikk</Button>
        <Button className={classes.sideMenu}>Omkring</Button>
        <Button className={classes.sideMenu}>Lokaliser</Button>
      </div>
    </Drawer>
  )
}
