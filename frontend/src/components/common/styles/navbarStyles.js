import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 300

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'auto',
    maxHeight: '80%',
    flexDirection: 'column',
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
  drawerPaperRight: {
    maxWidth: drawerWidth,
    width: drawerWidth,
    backgroundColor: '#f4f4f2',
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
    width: drawerWidth,
    marginTop: '1em',
    position: 'fixed',
    top: 0,
    backgroundColor: '#f4f4f2',
  },
  checkoutButton: {
    fontFamily: 'Montserrat',
    color: '#f4f4f2',
    height: '3em',
    fontWeight: 'bold',
    fontSize: '1.2em',
    backgroundColor: '#495464',
    letterSpacing: 4,
    width: drawerWidth,
  },
  checkoutButtonLayout: {
    position: 'fixed',
    bottom: 0,
    width: drawerWidth,
  },
  basketTotal: {
    fontFamily: 'Montserrat',
    color: '#495464',
    letterSpacing: 4,
    fontSize: '1.2em',
    margin: '0.5em',
  },
  basketTotalLayout: {
    display: 'flex',
    justify: 'space between',
    alignItems: 'flex-start',
  },
  breadCardContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  link: {
    textDecoration: 'none',
  },
}))
export default useStyles
