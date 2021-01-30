import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    letterSpacing: 8,
    fontSize: '15vh',
    textTransform: 'uppercase',
    color: '#495464',
    marginTop: '70vh',
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 30,
      writingMode: 'vertical-lr',
      textOrientation: 'upright',
      margin: '30vh 0 0 10vw',
    },
  },
}))

export default useStyles
