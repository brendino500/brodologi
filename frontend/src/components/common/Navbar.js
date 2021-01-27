import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import useStyles from './styles/navbarStyles'

import LeftDrawer from './LeftDrawer'
import RightDrawer from './RightDrawer'

const Navbar = () => {
  const classes = useStyles()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const onLeftDrawClose = () => {
    setState({ ...state, left: false })
  }

  const onRightDrawClose = () => {
    setState({ ...state, right: false })
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: 'transparent',
          boxShadow: '0px 0px 0px 0px',
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer('left', true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Brødologi
          </Typography>
          <IconButton
            aria-label="show cart items"
            onClick={toggleDrawer('right', true)}
          >
            <ShoppingCartIcon className={classes.icon} />
          </IconButton>
          <LeftDrawer isOpen={state['left']} onClose={onLeftDrawClose} />
          <RightDrawer isOpen={state['right']} onClose={onRightDrawClose} />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
