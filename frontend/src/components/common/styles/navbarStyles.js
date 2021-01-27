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
    color: '#f4f4f2',
    fontFamily: 'Montserrat',
    textTransform: 'uppercase',
    letterSpacing: 6,
  },
  icon: {
    color: '#f4f4f2',
    fontSize: '5vh',
  },
  buttonList: {
    display: 'flex',
    flexDirection: 'column',
    width: '26vw',
    marginTop: '40vh',
  },
  sideMenu: {
    fontFamily: 'Montserrat',
    textTransform: 'uppercase',
    fontSize: '3vh',
    letterSpacing: 3,
  },
  leftDrawer: {
    display: 'flex',
    flexGrow: 1,
    justify: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f2',
  },
}))
export default useStyles
