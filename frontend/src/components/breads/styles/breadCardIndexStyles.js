import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 20,
    [theme.breakpoints.between('xs', 'sm')]: {
      margin: 4,
    },
  },
  media: {
    height: 250,
    maxWidth: 300,
    [theme.breakpoints.between('xs', 'sm')]: {
      height: 150,
    },
  },
  button: {
    color: '#495464',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    marginBottom: '-10%',
    letterSpacing: 1,
    [theme.breakpoints.between('xs', 'sm')]: {
      width: 900,
      height: 30,
    },
  },
  text: {
    color: '#495464',
    fontFamily: 'Montserrat',
    fontSize: 20,
    width: 250,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 16,
    },
  },
  price: {
    color: '#495464',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 16,
    },
  },
  paper: {
    backgroundColor: '#e8e8e8',
    height: 80,
    [theme.breakpoints.between('xs', 'sm')]: {
      height: 40,
      maxWidth: 275,
    },
  },
  link: {
    textDecoration: 'none',
  },
  snackbar: {
    color: '#EBE8E5',
    fontFamily: 'Montserrat',
    backgroundColor: '#495464',
    textAlign: 'center',
  },
}))

export default useStyles
