import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 10,
    marginTop: '10vh',
  },
  title: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: '3em',
    letterSpacing: 7,
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#495464',
    marginBottom: '6%',
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 25,
    },
  },
}))

export default useStyles
