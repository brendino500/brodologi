import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'auto',
    maxHeight: '80%',
    [theme.breakpoints.between('xs', 'sm')]: {
      maxHeight: '75%',
    },
  },
  image: {
    height: 80,
    width: 80,
    [theme.breakpoints.between('xs', 'sm')]: {
      height: 65,
      width: 65,
    },
  },
  plantName: {
    fontFamily: 'Montserrat',
    fontSize: 15,
    color: '#495464',
    width: 175,
    [theme.breakpoints.between('xs', 'sm')]: {
      width: 150,
      fontSize: 14,
    },
  },
  price: {
    fontFamily: 'Montserrat',
    fontSize: 15,
    color: '#495464',
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 13,
    },
  },
  content: {
    backgroundColor: '#f4f4f2',
    display: 'flex',
    position: 'relative',
    flex: '1 0 auto',
  },
  card: {
    elevation: 0,
    margin: 1,
    height: 80,
    [theme.breakpoints.between('xs', 'sm')]: {
      height: 65,
    },
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
    flex: '1 0 auto',
  },
  link: {
    textDecoration: 'none',
  },
  cancelIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
    color: '#495464',
    fontSize: 15,
  },
  snackbar: {
    color: '#EBE8E5',
    fontFamily: 'Montserrat',
    backgroundColor: '#495464',
    textAlign: 'center',
  },
}))

export default useStyles
