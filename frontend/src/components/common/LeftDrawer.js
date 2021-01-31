import React from 'react'
import useStyles from './styles/navbarStyles'
import { Drawer, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

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
        <Link to="/" className={classes.link}>
          <Button className={classes.sideMenuText}>Hjem</Button>
        </Link>
        <Link to="/butikk" className={classes.link}>
          <Button className={classes.sideMenuText}>Butikk</Button>
        </Link>
        <Link to="/omkring" className={classes.link}>
          <Button className={classes.sideMenuText}>Omkring</Button>
        </Link>
      </div>
    </Drawer>
  )
}
