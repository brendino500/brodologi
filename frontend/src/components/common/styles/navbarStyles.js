import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: '#495464',
    fontFamily: 'Montserrat',
    textTransform: 'uppercase',
    letterSpacing: 6,
  },
  icon: {
    color: '#495464',
    fontSize: '5vh',
    position: 'absolute',
  },
  burgerIcon: {
    color: '#495464',
  },
  buttonList: {
    display: 'flex',
    flexDirection: 'column',
    width: '26vw',
    marginTop: '40vh',
    textAlign: 'center',
  },
  sideMenu: {
    fontFamily: 'Montserrat',
    textTransform: 'uppercase',
    fontSize: '3vh',
    letterSpacing: 3,
    color: '#495464',
  },
  link: {
    textDecoration: 'none',
  },
  leftDrawer: {
    display: 'flex',
    flexGrow: 1,
    justify: 'center',
    alignItems: 'center',
  },
  drawerPaperLeft: {
    backgroundColor: '#495464',
  },
  rightDrawer: {
    width: '80vw',
  },
  titleCart: {
    flexGrow: 1,
    color: '#495464',
    fontFamily: 'Montserrat',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: '1.5em',
    letterSpacing: 6,
    textAlign: 'center',
    width: '26vw',
    marginTop: '1em',
  },
  checkoutButton: {
    fontFamily: 'Montserrat',
    color: '#f4f4f2',
    height: '3em',
    fontWeight: 'bold',
    fontSize: '1.2em',
    backgroundColor: '#495464',
    letterSpacing: 4,
  },
  checkoutButtonLayout: {
    position: 'fixed',
    bottom: 0,
    width: '26vw',
  },
  basketTotal: {
    fontFamily: 'Montserrat',
    color: '#495464',
    letterSpacing: 4,
    fontSize: '1.2em',
  },
  basketTotalLayout: {
    display: 'flex',
    justify: 'space-between',
    alignItems: 'flex-start',
  },
}))
export default useStyles
