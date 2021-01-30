import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.between('xs', 'sm')]: {
      marginLeft: '0.5em',
      marginTop: '-7%',
    },
  },
  container: {
    display: 'flex',
    marginTop: '9em',
    [theme.breakpoints.between('xs', 'sm')]: {
      flexDirection: 'column',
      marginLeft: '-1em',
    },
  },
  image: {
    height: '60vh',
    [theme.breakpoints.between('xs', 'sm')]: {
      height: '40vh',
    },
  },
  breadName: {
    fontFamily: 'Montserrat',
    fontSize: 26,
    letterSpacing: 2,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    width: 300,
    color: '#495464',
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 16,
    },
  },
  text: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    width: 300,
    color: '#495464',
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 13,
      width: 275,
    },
  },
  price: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    letterSpacing: 2,
    color: '#495464',
    fontSize: 20,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 14,
    },
  },
  button: {
    color: '#f4f4f2',
    fontFamily: 'Montserrat',
    backgroundColor: '#495464',
    fontWeight: 'bold',
    letterSpacing: 2,
    [theme.breakpoints.between('xs', 'sm')]: {
      width: 275,
    },
  },
  numbers: {
    fontFamily: 'Montserrat',
    fontSize: 14,
    color: '#495464',
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 12,
    },
  },
  breadInfo: {
    marginLeft: 50,
    color: '#495464',
    [theme.breakpoints.between('xs', 'sm')]: {
      marginLeft: 0,
      marginTop: 5,
      width: '70vw',
    },
  },
  snackbar: {
    color: '#f4f4f2',
    fontFamily: 'Montserrat',
    backgroundColor: '#495464',
    textAlign: 'center',
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '70vw',
    },
  },
  numberInput: {
    border: '#495464',
  },
  numberText: {
    fontFamily: 'Montserrat',
  },
}))

export default useStyles
