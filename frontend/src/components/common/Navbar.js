import React, { useState } from 'react'
import clsx from 'clsx'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import useStyles from './styles/navbarStyles'

const Navbar = () => {
  const classes = useStyles()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

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
          <IconButton>
            <ShoppingCartIcon className={classes.icon} />
          </IconButton>
          <Drawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            className={classes.LeftDrawer}
          >
            <div className={classes.buttonList}>
              <Button className={classes.sideMenu}>Hjem</Button>
              <Button className={classes.sideMenu}>Butikk</Button>
              <Button className={classes.sideMenu}>Omkring</Button>
              <Button className={classes.sideMenu}>Lokaliser</Button>
            </div>
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
